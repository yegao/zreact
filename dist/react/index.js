(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    Object.defineProperty(exports, "__esModule", { value: true });
    const jsx_1 = require("./src/jsx");
    exports.default = {
        version: '0.0.0',
        createElement: jsx_1.createElement
    };

}));
