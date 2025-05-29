# myprestashop

Automation Tests for the My Prestashop

Configuration:

- Install the Playwright Test for VSCode extension
- Turn on File -> Autosave

Commands:

- Ctrl + Shift + P
- https://nodejs.org/ - install Node.js LTS version (Make sure to check the box that says Add to PATH during installation)
- check node version: node -v
- check npm version: npm -v
- when error occures: File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170 - use: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

- npm i @playwright/test
- npm i @playwright/test@next
- npm install --save-dev --save-exact prettier
- npm init @eslint/config@latest
- npm install eslint-config-prettier --save-dev
- npm install eslint-plugin-prettier@latest --save-dev
- npm install --save-dev @trivago/prettier-plugin-sort-imports
- npm install dotenv
- npm install --save-dev @playwright/test allure-playwright
- npm install -g allure-commandline --save-dev
  --------------MOBILE-----------------
- npm install playwright appium @types/node --save-dev

- install:
  - https://developer.android.com/tools/releases/platform-tools?hl=pl
  - adb version
  - connect device (Options for developers)
  - adb devices
  - npm i --location=global appium`or`npm install playwright appium @types/node
  - appium - check version
  - appium driver install uiautomator2 - driver
  - npm i --save-dev webdriverio
  - npm install appium webdriverio`/`npm install webdriverio @types/webdriverio --save-dev
  - npx wdio --version
  - npm install appium mocha chai @types/mocha @types/chai
  - npm install appium@next @appium/appium

Links:

- https://www.conventionalcommits.org/en/v1.0.0/
- https://github.com/marketplace/actions/slack-github-actions-slack-integration
- https://api.slack.com/apps
