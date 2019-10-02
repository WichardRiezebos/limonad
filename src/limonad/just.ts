import { Schematics } from "./schematics";
import { Limonad } from "./limonad";

export class Just<TBase> implements Schematics<TBase> {
    constructor(readonly value: TBase) { }

    map<TOut>(func: (base: TBase) => TOut): Schematics<TOut> {
        return Limonad.just(func(this.value));
    }

    mapMaybe<TOut>(func: (base: TBase) => TOut): Schematics<TOut> {
        return Limonad.maybe(func(this.value));
    }

    chain<TOut>(func: (base: TBase) => Schematics<TOut>): Schematics<TOut> {
        return func(this.value);
    }

    isJust = () => true;
    isNothing = () => false;

    extract = () => this.value;
}
