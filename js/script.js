{
  const tasks = [
    {
      content: "nagrać lekcje",
      done: false,
    },
    {
      content: "zjesc pierogi",
      done: true,
    },
  ];

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

  const render = () => {
    let htmlString = "";

    for (task of tasks) {
      htmlString += `
      <li 
      ${task.done ? " style=\"text-decoration:line-through\" " : ""}
      >
      <button class="js-remove">usuń</button>
      ${task.content}
      </li>
      `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", removeTask);
    });
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