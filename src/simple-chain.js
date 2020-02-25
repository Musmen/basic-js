const chainMaker = {
  valueArray: [],
  getLength() {
    return chainMaker.valueArray.length;
  },
  addLink(value = ' ') {
    chainMaker.valueArray.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (!Number.isInteger(position) ||  (position < 1) || (position >= chainMaker.getLength())) {
      chainMaker.valueArray = [];
      throw new Error();
    }
    chainMaker.valueArray.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    chainMaker.valueArray.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = chainMaker.valueArray.slice();
    chainMaker.valueArray = [];
    return result.map((item, index) => {
      return `${index ? '~~' : ''}( ${item} )`;
    }).join('');
  }
};

module.exports = chainMaker;
