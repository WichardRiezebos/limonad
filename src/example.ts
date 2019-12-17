import { Limonad } from "./limonad/limonad";

const isSecondWordLongerThan4 = (val: string) => Limonad.maybe(val)
  .mapMaybe(e => e.split(' ')[1])
  .chain(Limonad.binary(e => e.length > 4))
  .extract()

const isSecondWordLongerThan4Legacy = (val: string) => {
  if (val) {
    const secondWord = val.split(' ')[1];

    if (secondWord) {
      return secondWord.length > 4;
    }
  }

  return null;
}

console.log(isSecondWordLongerThan4('long sentence'))
console.log(isSecondWordLongerThan4('longword'))
console.log(isSecondWordLongerThan4(null))

/** Keep alive */
setInterval(() => { }, 1000);