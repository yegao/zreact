(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["jsx-dev-runtime"] = global["jsx-dev-runtime"] || {}, global["jsx-dev-runtime"].js = {})));
})(this, (function (exports) { 'use strict';

    var jsx = {};

    var ReactSymbols = {};

    Object.defineProperty(ReactSymbols, "__esModule", { value: true });
    ReactSymbols.REACT_ELEMENT_TYPE = void 0;
    const supportSymbol = typeof Symbol === 'function' && Symbol.for;
    ReactSymbols.REACT_ELEMENT_TYPE = supportSymbol ? Symbol.for('react.element') : 0x888888;

    Object.defineProperty(jsx, "__esModule", { value: true });
    exports.createElement = jsx.createElement = exports.ReactElement = jsx.ReactElement = void 0;
    const ReactSymbols_1 = ReactSymbols;
    function ReactElement(type, key, ref, props) {
        return {
            $$typeof: ReactSymbols_1.REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props
        };
    }
    exports.ReactElement = jsx.ReactElement = ReactElement;
    function createElement(type, config, ...maybeChildren) {
        let key = null;
        let ref = null;
        const props = {};
        for (const prop in config) {
            const val = config[prop];
            if (val !== undefined) {
                if (prop === 'key') {
                    key = '' + val;
                    continue;
                }
                if (prop === 'ref') {
                    ref = val;
                    continue;
                }
            }
            if (Object.prototype.hasOwnProperty.call(config, prop)) {
                props[prop] = val;
            }
        }
        const maybeChildrenLen = maybeChildren.length;
        // props.children    type PropsChildrenType = ReactElement|Array<PropsChildrenType>
        if (maybeChildrenLen === 1) {
            props.children = maybeChildren[0]; // ReactElement
        }
        else {
            props.children = maybeChildren; // Array<PropsChildrenType>
        }
        return ReactElement(type, key, ref, props);
    }
    exports.createElement = jsx.createElement = createElement;

    exports.default = jsx;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
