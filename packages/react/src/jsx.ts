import { REACT_ELEMENT_TYPE } from "../../shared/ReactSymbols";
import { ElementType, ReactElement, Ref, Key, Props } from "../../shared/ReactTypes";

export function ReactElement(type: ElementType, key: Key, ref: Ref, props: Props): ReactElement {
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props
    };
}

export function createElement(type: ElementType, config: any, ...maybeChildren: any) {
    let key: Key = null;
    let ref: Ref = null;
    const props: Props = {};
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
    } else {
        props.children = maybeChildren; // Array<PropsChildrenType>
    }
    return ReactElement(type, key, ref, props);
}