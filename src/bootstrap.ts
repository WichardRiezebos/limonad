import { Limonad } from "./limonad/limonad";

const test = (val: string) => Limonad.maby(val)
  .map(e => e.split(' ')[0])
  .chain(Limonad.binary(e => e.length > 4))
  .extract()

console.log(test('long sentence'))
console.log(test('longword'))
console.log(test(null))

/** Keep alive */
setInterval(() => { }, 1000);