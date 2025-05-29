import fs from "fs";
import path from "path";
import axios from "axios";

// Logujemy czy jest klucz
console.log("OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function main() {
  // 1. Znajdź pliki z wynikami Allure (najczęściej ./allure-results/*.json)
  const allureDir = path.join(process.cwd(), "allure-results");
  if (!fs.existsSync(allureDir)) {
    throw new Error(`No allure-results folder found in ${process.cwd()}`);
  }

  // 2. Wczytaj wszystkie pliki .json z folderu
  const files = fs.readdirSync(allureDir).filter((file) => file.endsWith(".json"));
  let tests: any[] = [];

  for (const file of files) {
    const filePath = path.join(allureDir, file);
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const json = JSON.parse(content);

      // Pliki test-case mają uuid i status
      if (json.uuid && json.status) {
        tests.push(json);
      }
    } catch (err) {
      // Pomijamy pliki nie będące test-case'ami
      continue;
    }
  }

  // 3. Podsumuj wyniki (możesz rozbudować według potrzeb)
  const total = tests.length;
  const passed = tests.filter((t) => t.status === "passed").length;
  const failed = tests.filter((t) => t.status === "failed").length;
  const broken = tests.filter((t) => t.status === "broken").length;
  const skipped = tests.filter((t) => t.status === "skipped").length;

  const failedTests = tests.filter((t) => t.status === "failed" || t.status === "broken");
  const failedNames = failedTests.map((t) => t.name);

  // 4. Zbuduj prompt dla LLM
  const summaryPrompt = `
Allure Test Summary:
- Total tests: ${total}
- Passed: ${passed}
- Failed: ${failed}
- Broken: ${broken}
- Skipped: ${skipped}
- Failed/Broken test names: ${failedNames.join(", ") || "None"}

Based on the above, provide a brief summary and main recommendation for the QA team.
`;

  // 5. Wyślij prompt do OpenAI
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini", // lub "gpt-3.5-turbo" jeśli nie masz dostępu do 4o
        messages: [
          {
            role: "user",
            content: summaryPrompt,
          },
        ],
        max_tokens: 200,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiSummary = response.data.choices[0].message.content;
    console.log("AI Analysis Summary:\n", aiSummary);

    // 6. Zapisz podsumowanie do pliku
    fs.writeFileSync(
      "ai_analysis_result.json",
      JSON.stringify({ summary: aiSummary, allure: summaryPrompt }, null, 2)
    );
  } catch (error: any) {
    console.error("Error during AI analysis:", error?.response?.status, error?.response?.data || error.message);
    fs.writeFileSync(
      "ai_analysis_result.json",
      JSON.stringify({ summary: "AI analysis failed", error: error?.message }, null, 2)
    );
  }
}

main().catch((e) => {
  console.error("Critical error in analyzeAllureReport.ts:", e.message);
  process.exit(1);
});
