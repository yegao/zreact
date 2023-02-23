export type ElementType = any;
export type Key = string | null;
export type Ref = any;
export type Props = any;
export type ElementTyle = any;

export interface ReactElement {
    $$typeof: symbol | number;
    type: ElementType;
    key: Key;
    ref: Ref;
    props: Props;
}