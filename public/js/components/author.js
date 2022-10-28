export class AuthorTable {
	authorService;
	element;

	constructor(authorService) {
		this.authorService = authorService;
		this.element = document.createElement("table")

		const tableHeaders = document.createElement("tr")

		const idHeader = document.createElement("th")
		idHeader.innerText = "id"
		idHeader.style.border = "1px solid black"
		idHeader.style.borderCollapse = "collapse"
		tableHeaders.appendChild(idHeader)

		const nameHeader = document.createElement("th")
		nameHeader.innerText = "name"
		nameHeader.style.border = "1px solid black"
		nameHeader.style.borderCollapse = "collapse"
		tableHeaders.appendChild(nameHeader)


		this.element.appendChild(tableHeaders)

		for (const author of authorService.getAll()) {
			const row = document.createElement("tr")

			const id = document.createElement("td")
			id.innerText = author.id
			id.style.border = "1px solid black"
			id.style.borderCollapse = "collapse"
			row.appendChild(id)

			const name = document.createElement("td")
			name.innerText = author.name
			name.style.border = "1px solid black"
			name.style.borderCollapse = "collapse"
			row.appendChild(name)

			this.element.appendChild(row);
		}


		this.element.style.border = "1px solid black"
		this.element.style.borderCollapse = "collapse"
	}
}
