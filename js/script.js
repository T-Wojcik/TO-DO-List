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
      <li>
      ${task.content}
      </li>
      `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
  }

  const init = () => {
    render();
  }
  init();
}