# Limonad
Set of majestic monad and monoid functions wrapped into a strongly-typed jacket to perform state of the art functional programming with a OOP twist.

### Example code

With limonads:
```
const isSecondWordLong = (val: string) => Limonad.maybe(val)
  .mapMaybe(e => e.split(' ')[1])
  .chain(Limonad.binary(e => e.length > 4))
  .extract()

console.log(isSecondWordLongerThan4('long sentence'))
console.log(isSecondWordLongerThan4('longword'))
console.log(isSecondWordLongerThan4(null))
```

Without limonads:
```
const isSecondWordLongerThan4 = (val: string) => {
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
```

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* [Node.js 10.x LTS](https://nodejs.org/en/) - a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Installation

Install NodeJS dependencies:
```bash
$ npm i
```

### Running the app


```bash
# watch mode (recommended for development)
$ npm run serve
```

## Contributing

Please read [CONTRIBUTING.md](#) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](#). 

## Authors

* **Wichard Riezebos** - *Initial and major work* - [WichardRiezebos](https://github.com/WichardRiezebos)

See also the list of [contributors](h#) who participated in this project.

## License

  
Nest is [MIT licensed](LICENSE).
