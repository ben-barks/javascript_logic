const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
  // this.special = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?".split('');
}

PangramFinder.prototype.isPangram = function () {
  let final = this.alphabet.reduce( (start, character) => {
    if (this.phrase.includes(character) || this.phrase.includes(character.toUpperCase() )){
      return true;
    }
    else {
      return false;
    };
  }, false);

  return final;
};

module.exports = PangramFinder;
