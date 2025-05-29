import fs from 'fs';
import path from 'path';
import axios from 'axios';

const ALLURE_RESULTS_PATH = path.resolve(__dirname, 'allure-results'); // Folder z raportami Allure
console.log('OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Funkcja do wysyłania zapytania do OpenAI
const analyzeWithLLM = async (data: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Możesz użyć modelu GPT-4, jeśli jest dostępny
        prompt: `Analyze the following test report and provide a summary with insights and recommendations:\n\n${data}`,
        max_tokens: 500,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error during analysis:', error);
    return 'Error during analysis.';
  }
};

// Funkcja do odczytu raportów Allure
const readAllureReports = async () => {
  const files = fs.readdirSync(ALLURE_RESULTS_PATH);
  const allureData: any[] = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(ALLURE_RESULTS_PATH, file);
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(rawData);
      allureData.push(data);
    }
  }

  return allureData;
};

// Główna funkcja, która analizuje raporty
const analyzeReports = async () => {
  const reports = await readAllureReports();
  const reportSummary = JSON.stringify(reports); // Możesz dostosować to do formatu, który jest użyteczny dla LLM

  // Analiza z użyciem LLM
  const analysisResult = await analyzeWithLLM(reportSummary);

  console.log('AI Analysis Result:', analysisResult);
};

analyzeReports().catch((error) => console.error('Error analyzing reports:', error));
