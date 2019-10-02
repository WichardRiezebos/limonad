import { Schematics } from "./schematics";

export class Just<TBase> implements Schematics<TBase> {
    constructor(readonly value: TBase) { }

    map<TOut>(func: (base: TBase) => TOut): Schematics<TOut> {
        return new Just(func(this.value));
    }

    chain<TOut>(func: (base: TBase) => Schematics<TOut>): Schematics<TOut> {
        return func(this.value);
    }

    isJust = () => true;
    isNothing = () => false;

    extract = () => this.value;
}
