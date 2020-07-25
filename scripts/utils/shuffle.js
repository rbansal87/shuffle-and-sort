(function () {
  const shuffle = function () {
    let i = this.length;
    if (i == 0) return this;
    while (--i) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  };

  if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = shuffle;
  }
})();
