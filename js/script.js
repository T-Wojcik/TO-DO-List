{
  const tasks = [];

  const addNewTask = () => {
    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }

    tasks.push({
      content: newTaskContent,
    });
    render();
  }

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  }

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  }

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
  }

  const render = () => {
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
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask();
  }

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  }
  init();
}