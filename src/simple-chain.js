const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  counter: 1,
  chain: {},
  getLength() {
    return Object.keys(this.chain).length;
  },
  addLink( value ) {
    value === undefined ? this.chain[this.counter] = '( )' : this.chain[this.counter] = `( ${value} )`;
    this.counter++;
    return this;
  },
  removeLink( position ) {
    if(!this.chain[position]) {
      this.chain = {};
      throw new Error('You can\'t remove incorrect link!');
    }
    delete this.chain[position];
    let chainValues = Object.values(this.chain);
    let i = 1;
    this.chain = {};
    for(let value of chainValues) {
      this.chain[i] = value;
      i++;
    }
    i = 1;
    return this;
  },
  reverseChain() {
    let chainValues = Object.values(this.chain).reverse();
    let i = 1;
    this.chain = {};
    for(let value of chainValues) {
      this.chain[i] = value;
      i++;
    }
    i = 1;
    return this;
  },
  finishChain() {
    let result = Object.values(this.chain).join('~~');
    this.chain = {};
      this.counter = 1;
    return result;
  }
};

module.exports = {
  chainMaker
};
