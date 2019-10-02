import { Schematics } from './schematics';

export class Nothing<TBase> implements Schematics<TBase> {
    map<TOut>(func: (base: TBase) => TOut): Schematics<TOut> {
        return new Nothing<TOut>();
    }

    mapMaybe<TOut>(func: (base: TBase) => TOut): Schematics<TOut> {
        return new Nothing<TOut>();
    }

    chain<TOut>(func: (base: TBase) => Schematics<TOut>): Schematics<TOut> {
        return new Nothing<TOut>();
    }

    isJust = () => false;
    isNothing = () => true;

    extract = () => null;
}