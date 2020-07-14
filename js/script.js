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



  const render = () => {
    let htmlString = "";

    for (task of tasks) {
      htmlString += `
      <li 
      ${task.done ? " style=\"text-decoration:line-through\" " : ""}
      >
      ${task.content}
      </li>
      `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
  }

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