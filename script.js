let bookObject = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    maxPages: 200,
    onPage: 60,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    maxPages: 250,
    onPage: 150,
  },
  {
    title: "50 Shades of Grey",
    author: "E.L. James",
    maxPages: 150,
    onPage: 150,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Carvantes",
    maxPages: 350,
    onPage: 300,
  },
  {
    title: "Hamlet",
    author: "Viliam Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
  {
    title: "Лиљакот",
    author: "Ју Несбе",
    maxPages: 350,
    onPage: 330,
  },
];
const firstUl = document.querySelector(".books-authors");
const secondUl = document.querySelector(".read-not-read");
const table = document.querySelector("table");
const tbody = document.createElement("tbody");

const tableFun = () => {
  tbody.innerHTML = "";
  bookObject.forEach((book) => {
    let progress = Math.floor((book.onPage / book.maxPages) * 100);
    tbody.innerHTML += `<tr> 
    <td>  ${book.title} </td>
    <td>  ${book.author}  </td>
    <td>  ${book.maxPages}  </td>
    <td> ${book.onPage} </td>
    <td class="gray-bg"><div class="progress-bar" style="width: ${progress}%; ">${progress}%</div></td>   
    </tr>
    `;
  });
  table.appendChild(tbody);
};

const booksFunc = () => {
  firstUl.innerHTML = "";
  secondUl.innerHTML = "";
  bookObject.forEach((book) => {
    firstUl.innerHTML += `<li>${book.title} by ${book.author}</li>`;

    if (book.maxPages === book.onPage) {
      secondUl.innerHTML += `<li style="color:green">You already read ${book.title} by ${book.author}</li>`;
    } else {
      secondUl.innerHTML += `<li style="color:red">You still need to read it ${book.title} by ${book.author}</li>`;
    }
  });
  tableFun();
};

booksFunc();

const addBookForm = document.querySelector("#add-book-form");

addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newBooks = {};
  const inputs = document.querySelectorAll("input");
  inputs.forEach((inputVal) => {
    let properties = inputVal.dataset.property;
    let value = inputVal.value;
    newBooks[properties] = value;
    inputVal.value = "";
  });
  bookObject.push(newBooks);

  booksFunc();
  tableFun();
});
