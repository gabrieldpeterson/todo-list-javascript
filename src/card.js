class Card {
  constructor(name) {
    this.name = name;
  }

  info() {
    const body = document.querySelector('body');
    const infoDiv = document.createElement('div');
    infoDiv.textContent = this.name;
    body.appendChild(infoDiv);
  }
}

export default Card;