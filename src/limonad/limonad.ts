import { Schematics } from './schematics';
import { Nothing } from './nothing';
import { Just } from './just';

export class Limonad {
    static nothing<T>(): Schematics<T> {
        return new Nothing<T>();
    }

    static just<T>(value: T): Schematics<T> {
        return new Just<T>(value);
    }

    static maby<T>(value: T): Schematics<T> {
        return this.isNothing(value) ? this.nothing<T>() : this.just<T>(value);
    }

    static binary<T>(func: (value: T) => boolean): (value: T) => Schematics<T> {
        return (value => func(value) ? this.just(value) : this.nothing<T>());
    }

    protected static isNothing(a) {
        return a == null || a == undefined;
    }
}