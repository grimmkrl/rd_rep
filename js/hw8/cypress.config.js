const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://api.clickup.com/api/v2",
    env: {
      token:'pk_152555169_9AMGKFPXHZ4JP3HTHPP7Q8A7M4NRBBSM'
    }
  },
})