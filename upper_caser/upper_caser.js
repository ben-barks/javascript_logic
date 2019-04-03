const UpperCaser = function (words){
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  let upper = [];
  const callback = (item) => {
    upper.push(item.toUpperCase())
  };
  let result = this.words.map(callback);
  return upper;
};

module.exports = UpperCaser;
