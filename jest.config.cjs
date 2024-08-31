module.exports = {
    preset: "jest-preset",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
};
