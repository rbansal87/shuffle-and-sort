class App {
  constructor(context) {
    this.context = context;
    this.init();
  }

  init = () => {
    this.attachEvent();
    this.gridCell = new Grid();
  };

  attachEvent = () => {
    let button1 = document.getElementById("shuffle");
    let button2 = document.getElementById("sort");
    button1.addEventListener("click", this.shuffleClick);
    button2.addEventListener("click", this.sortClick);
  };

  shuffleClick = () => {
    this.gridCell.shuffleCell();
  };

  sortClick = () => {
    this.gridCell.sortCell();
  };
}
