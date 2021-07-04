import { html, render } from "../node_modules/lit-html/lit-html.js";
start();

const rowTemplate = (student, select) => html`
  <tr class=${select ? "select" : ""}>
    <td>${student.firstName} ${student.lastName}</td>
    <td>${student.email}</td>
    <td>${student.course}</td>
  </tr>
`;

const input = document.querySelector("#searchField");

async function start() {
  document.querySelector("#searchBtn").addEventListener("click", () => {
     //second update call which takes into consideration the comparison
    update(list, input.value);
    input.value = ''
  });
  const response = await fetch("http://localhost:3030/jsonstore/advanced/table");
  const data = await response.json();
  const list = Object.values(data);

  //first update call renders the template without comparison
  update(list);
}

const tbody = document.querySelector("tbody");

function update(list, match = "") {
   //calls template with each object from data array and creates row using template and compare function as the "select" parameter
  const result = list.map((e) => rowTemplate(e, compare(e, match)));
  render(result, tbody);
}

function compare(item, match) {
   //returns true or false as the "select"
  return Object.values(item).some((v) => match && v.toLowerCase().includes(match.toLowerCase()));
}


