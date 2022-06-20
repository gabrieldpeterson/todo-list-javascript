const domBuilder = (() => {
  const body = document.querySelector('body');

  const buildSkeleton = () => {
    buildHeader();
  }

  const buildHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const title = document.createElement('h1');
    title.textContent = 'ToDo List'

    // Project Drop Down List Selector
    const projectSelector = document.createElement('select');
    //replace with loop to select all project, this is temporary
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'default';
    const option1 = document.createElement('option');
    option1.textContent = 'Option 1';

    const newTaskButton = document.createElement('button');
    newTaskButton.textContent = 'New Task';
    newTaskButton.setAttribute('type', 'button');


    projectSelector.appendChild(defaultOption);
    projectSelector.appendChild(option1);

    body.appendChild(header);
    header.appendChild(title);
    header.appendChild(projectSelector);
    header.appendChild(newTaskButton);
  }

  const buildBody = () => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    // foreach task create card

    body.appendChild(content);
  }

  const buildCard = () => {
    // test
    const testDiv = document.createElement('div');
    testDiv.textContent = 'Build card test';
    body.appendChild(testDiv);
  }

  return { buildSkeleton, buildCard }
})();

export { domBuilder };