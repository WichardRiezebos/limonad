export interface Schematics<TBase> {
    map<TOut>(func: (base: TBase) => TOut): Schematics<TOut>;
    chain<TOut>(func: (base: TBase) => Schematics<TOut>): Schematics<TOut>;
    isJust(): boolean;
    isNothing(): boolean;

    extract(): TBase;
}
