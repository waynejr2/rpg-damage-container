module.exports = function(config){
  config.set({
    files: ['spec/**/*.js', 
            { pattern: 'index.js', included: false, mutated: true }],
    testFramework: 'mocha',
    testRunner: 'mocha',
    mutator: 'javascript',
    reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
    coverageAnalysis: 'all',
    plugins: ['stryker-mocha-runner', 'stryker-html-reporter', 'stryker-javascript-mutator']
  });
}