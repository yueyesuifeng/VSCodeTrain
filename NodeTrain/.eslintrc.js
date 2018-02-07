module.exports = { //定义整个项目的代码风格
    "env": {
        "browser": false, //代码的运行的环境是什么，可以允许js的环境很多
        "commonjs": false,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": false,
            "jsx": false
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-console': 'off', //规则设置，这个项目代码里不允许出现console
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "off",
            "windows"
        ],
        "quotes": [
            "off",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};