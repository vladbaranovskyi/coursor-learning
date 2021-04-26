function* idGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
}
const generator = idGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);