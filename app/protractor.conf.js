exports.config = {
    allScriptsTimeour:12000,
    specs: [
        'test-e2e/**/*.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:8080',
    framework: 'jasmine'
    
};