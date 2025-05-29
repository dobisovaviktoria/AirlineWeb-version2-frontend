import './bookings.js'
import './add.js'
import './search.js'

document.addEventListener('DOMContentLoaded', () => {
    const navSearch = document.getElementById('nav-search')
    const navAdd = document.getElementById('nav-add')
    const sectionSearch = document.getElementById('section-search')
    const sectionAdd = document.getElementById('section-add')

    function showSection(sectionToShow) {
        sectionSearch.style.display = 'none'
        sectionAdd.style.display = 'none'
        sectionToShow.style.display = 'block'
    }

    navSearch.addEventListener('click', () => showSection(sectionSearch))
    navAdd.addEventListener('click', () => showSection(sectionAdd))

    showSection(sectionSearch)
})
