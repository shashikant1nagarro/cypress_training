const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:'Shashikant_CypressTraining',
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/reports',
    screenshotsFolder:'cypress/reports/screenshots',
    charts:true,
    json: true,
    overwrite:false,
    reportPageTitle:'Parabank Test Report'
  },

  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    screenshotOnRunFailure:true,
    baseUrl:"https://parabank.parasoft.com/parabank",
    env:{
    username: "john",
    password: "demo"
  },
    
  },
});
