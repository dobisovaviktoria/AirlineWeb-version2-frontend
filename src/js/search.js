const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search')
const searchResults = document.querySelector('#search-results')

searchForm.addEventListener('submit', async e => {
    e.preventDefault()
    const query = searchInput.value.trim()
    if (!query) {
        return
    }

    searchResults.innerHTML = '<p class="text-muted">Searching...</p>'

    try {
        const response = await fetch(`http://localhost:8081/api/passengers/client?query=${encodeURIComponent(query)}`)

        if (!response.ok) {
            throw new Error('Failed to fetch passengers')
        }

        const passengers = await response.json()

        if (passengers.length === 0) {
            searchResults.innerHTML = '<p>No records found.</p>'
            return
        }

        let html = `<p>Found ${passengers.length} passenger(s)</p>`
        html += `
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
    `

        passengers.forEach(p => {
            html += `
        <tr>
          <td>${p.passengerID}</td>
          <td>${p.firstName}</td>
          <td>${p.lastName}</td>
          <td>${p.nationality}</td>
        </tr>
      `
        })

        html += '</tbody></table>'
        searchResults.innerHTML = html
    } catch (err) {
        searchResults.innerHTML = `<p class="text-danger">Error: ${err.message}</p>`
    }
})
