const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 2, 3);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let pedro = new Person('Pedro');
let helena = new Person('Helena');
helena.on('name', () =>{
    console.log('my name is' + helena._name)
})
helena.emit('name');
pedro.on('name', () => {
  console.log('My name is ' + pedro.name);
});

pedro.emit('name');
