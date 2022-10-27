import { AuthorTable } from "./components/author.js"
import { AuthorRepo } from "./models/author.js"

const serverInfo = {
	address: "localhost",
	port: 3000,
}

const authorTable = AuthorTable(new AuthorRepo(serverInfo));

document.body.appendChild(authorTable);
