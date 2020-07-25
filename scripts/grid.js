class Grid {
  constructor() {
    this.arr = [];
    this.init();
  }

  init() {
    for (let i = 0; i < CELLS.length; i++) {
      const cell = new Cell(i + 1, CELLS[i]);
      this.arr.push(cell);
    }
    this.createMarkup();
  }

  createMarkup() {
    const gridContainer = document.querySelector(".number-cell");
    let markup = "";
    this.arr.forEach((cell) => {
      const template = `<div class="cell-outer">
                                    <div class="cell-inner" style="background-color: ${cell.color}"></div>
                                    <div class="cell-value">${cell.number}</div>
                                    </div>`;
      markup += template;
    });
    gridContainer.innerHTML = markup;
  }

  shuffleCell() {
    this.arr.shuffle();
    this.createMarkup();
  }

  sortCell() {
    this.arr.sort(function (a, b) {
      return a.number - b.number;
    });
    this.createMarkup();
  }
}
