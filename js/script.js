{
  let tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks = [
      ...tasks,
      { content: newTaskContent },
    ];
    render();
  };


  const removeTask = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      { ...tasks[taskIndex], done: !tasks[taskIndex].done },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    renderTasks();
    bindEvents();
    renderButtons();
  };

  const renderTasks = () => {
    let htmlString = "";

    for (task of tasks) {
      htmlString += `
      <div class="taskContainer">
      <li class="taskList__element"
      ${task.done ? " style=\"text-decoration:line-through\" " : ""}
      >
      ${task.content}
      </li>
      <button class="js-remove taskList__button taskList__button--red">🗑</button>
      <button class="js-done taskList__button taskList__button--green">${task.done ? innerHTML = "✔" : ""}</button>
      </div>
      `;
    };
    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const renderButtons = () => {
    let buttonsHtml = "";

    for (task of tasks) {
      if (task.content !== "") {
        buttonsHtml =
          `
        <li class="buttonList__item"><button class="buttonList__button js-hideAllTasksButton">Ukryj ukończone</button></li>
        <li class="buttonList__item"><button class="buttonList__button js-doneAllTasksButton">Ukończ wszystkie</button></li>
         `;
      } else {
        buttonsHtml = "";
      };
    };

    document.querySelector(".js-buttonsList").innerHTML = buttonsHtml;

  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask");
    const newTaskElement = newTaskContent.value.trim();

    if (newTaskElement !== "") {
      addNewTask(newTaskElement);
      newTaskContent.value = "";

    }
    newTaskContent.focus();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };
  init();
}