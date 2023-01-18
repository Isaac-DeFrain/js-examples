const Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

suite.add('RegExp#test', function() {
    /o/.test('Hello world!');
})
.add('String#indexOf', function() {
    'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
    !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
