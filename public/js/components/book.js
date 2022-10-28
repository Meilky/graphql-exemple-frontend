export class BookTable {
	bookService;
	element;

	constructor(bookService) {
		this.bookService = bookService;
		this.element = document.createElement("table")

		const tableHeaders = document.createElement("tr")

		const idHeader = document.createElement("th")
		idHeader.innerText = "id"
		idHeader.style.border = "1px solid black"
		idHeader.style.borderCollapse = "collapse"
		tableHeaders.appendChild(idHeader)

		const titleHeader = document.createElement("th")
		titleHeader.innerText = "name"
		titleHeader.style.border = "1px solid black"
		titleHeader.style.borderCollapse = "collapse"
		tableHeaders.appendChild(titleHeader)

		const authorIdHeader = document.createElement("th")
		authorIdHeader.innerText = "name"
		authorIdHeader.style.border = "1px solid black"
		authorIdHeader.style.borderCollapse = "collapse"
		tableHeaders.appendChild(authorIdHeader)


		this.element.appendChild(tableHeaders)

		for (const book of bookService.getAll()) {
			const row = document.createElement("tr")

			const id = document.createElement("td")
			id.innerText = book.id
			id.style.border = "1px solid black"
			id.style.borderCollapse = "collapse"
			row.appendChild(id)

			const title = document.createElement("td")
			title.innerText = book.title
			title.style.border = "1px solid black"
			title.style.borderCollapse = "collapse"
			row.appendChild(title)

			const authorId = document.createElement("td")
			authorId.innerText = book.authorId
			authorId.style.border = "1px solid black"
			authorId.style.borderCollapse = "collapse"
			row.appendChild(authorId)

			this.element.appendChild(row);
		}


		this.element.style.border = "1px solid black"
		this.element.style.borderCollapse = "collapse"
	}
}
