import { AuthorRepo } from "./repos/author.js"
import { AuthorService } from "./services/author.js"
import { AuthorTable } from "./components/author.js"

import { BookRepo } from "./repos/book.js"
import { BookService } from "./services/book.js"
import { BookTable } from "./components/book.js"

const serverInfo = {
	address: "localhost",
	port: 3000,
}

const authorRepo = new AuthorRepo();
const bookRepo = new BookRepo();

const authorService = new AuthorService(authorRepo, bookRepo);
const bookService = new BookService(bookRepo, authorRepo);

const authorTable = new AuthorTable(authorService);
const bookTable = new BookTable(bookService);

document.body.appendChild(authorTable.element);
document.body.appendChild(bookTable.element);
