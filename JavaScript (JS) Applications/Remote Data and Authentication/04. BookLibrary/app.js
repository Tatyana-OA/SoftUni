loadBooks();
const [
  bookTitle,
  bookAuthor,
  editTitle,
  editAuthor,
] = document.querySelectorAll("input");
const submitForm = document.querySelector("#submitForm");
const editForm = document.querySelector("#editForm");
const submitBtn = document.querySelector("#submit");
const saveBtn = document.querySelector("#save");
const editBookId = document.querySelector("#bookId");
saveBtn.addEventListener("click", onSave);

editForm.style.display = "none";
editBookId.style.display = "none";

submitBtn.addEventListener("click", onSubmit);

const loadBtn = document.querySelector("#loadBooks");
loadBtn.addEventListener("click", onLoad);

const tbody = document.querySelector("tbody");

async function onSubmit(event) {
  event.preventDefault();
  if (bookTitle.value && bookAuthor.value) {
    const title = bookTitle.value;
    const author = bookAuthor.value;

    submitBook({ author, title });
    bookTitle.value = "";
    bookAuthor.value = "";
    onLoad();
  } else {
    alert("Input fields cannot be empty!");
  }
}

async function loadBooks() {
  const url = "http://localhost:3030/jsonstore/collections/books";
  const response = await fetch(url);
  const data = await response.json();
  for (const key in data) {
    let bookObj = data[key];

    const tr = e("tr");
    tbody.appendChild(tr);

    const tdBookTitle = e("td", bookObj.title);
    tdBookTitle.setAttribute("value", bookObj._id);
    tr.appendChild(tdBookTitle);

    const tdBookAuthor = e("td", bookObj.author);
    tdBookAuthor.setAttribute("value", bookObj._id);
    tr.appendChild(tdBookAuthor);

    const tdBtns = e("td");
    tr.appendChild(tdBtns);

    const editBtn = e("button", "Edit");
    editBtn.setAttribute("value", bookObj._id);
    editBtn.addEventListener("click", onEdit);
    tdBtns.appendChild(editBtn);

    const delBtn = e("button", "Delete");
    delBtn.setAttribute("value", bookObj._id);
    delBtn.addEventListener("click", onDelete);
    tdBtns.appendChild(delBtn);
  }
}

async function onEdit(event) {
  const bookId = event.target.value;
  const book = event.target.parentNode.parentNode.children;
  const bookTitle = book.item(0).textContent;
  const bookAuthor = book.item(1).textContent;

  editTitle.value = bookTitle;
  editAuthor.value = bookAuthor;
  editBookId.textContent = bookId;

  submitForm.style.display = "none";
  editForm.style.display = "block";
}

async function onSave(event) {
  event.preventDefault();
  if (editAuthor.value && editTitle.value) {
  const bookToEditId = editBookId.textContent;
  const bookData = {
    author: editAuthor.value,
    title: editTitle.value,
  };

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    author: editAuthor.value,
    title: editTitle.value,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://localhost:3030/jsonstore/collections/books/" + bookToEditId,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  submitForm.style.display = "block";
  editForm.style.display = "none";

  onLoad();
  }else {
    alert("Input fields cannot be empty!");
  }
}

async function onDelete(event) {
  let bookId = event.target.value;
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/books/" + bookId,
    {
      method: "delete",
    }
  );
  console.log(bookId);
  const bookToDelete = event.target.parentNode.parentNode;
  bookToDelete.remove();
  onLoad();
}

async function submitBook(bookInfo) {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/books",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookInfo),
    }
  );
}

function onLoad(event) {
  tbody.innerHTML = "";
  loadBooks();
}

function e(type, textContent, className) {
  let element = document.createElement(type);
  if (textContent) {
    element.textContent = textContent;
  }
  if (className) {
    element.className = className;
  }
  return element;
}
