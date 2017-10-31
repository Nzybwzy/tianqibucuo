import config from './server/local/config';

module.exports = {
    "entry"     : "src/index.js",
    "env"       : {
        "development": {
            "extraBabelPlugins": [
                "dva-hmr",
                "transform-runtime",
                ["import", {"libraryName": "antd", "style": true}]
            ]
        },
        "production" : {
            "extraBabelPlugins": [
                "transform-runtime",
                ["import", {"libraryName": "antd", "style": true}]
            ]
        }
    },
    "publicPath": "/",
    "proxy"     : {
        "/nchr"  : {
            "target"      : `http://nchr.release.microfastup.com/nchr/`,
            "changeOrigin": true,
            "pathRewrite" : {"^/nchr": ""}
        }
    },
    "theme"     : {
        "primary-color": "#ccc",
    }
};