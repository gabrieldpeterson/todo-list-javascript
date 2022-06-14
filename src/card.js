class Card {
  constructor(name, description, dueDate, priority, notes, project) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
  }

  info() {
    //temp
    const body = document.querySelector('body');
    const infoDiv = document.createElement('div');
    infoDiv.textContent = this.name;
    body.appendChild(infoDiv);
  }
}

export default Card;