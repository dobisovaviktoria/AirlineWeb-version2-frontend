document.addEventListener('DOMContentLoaded', async () => {
    const passengerSelect = document.getElementById('passenger-select')
    const flightSelect = document.getElementById('flight-select')

    try {
        const passengerResponse = await fetch('http://localhost:8081/api/bookings/passengers')
        const passengers = await passengerResponse.json()

        passengers.forEach(p => {
            const option = document.createElement('option')
            option.value = p.passengerID
            option.textContent = `${p.firstName} ${p.lastName}`
            passengerSelect.appendChild(option)
        })

        const flightResponse = await fetch('http://localhost:8081/api/bookings/flights')
        const flights = await flightResponse.json()

        flights.forEach(f => {
            const option = document.createElement('option')
            option.value = f.flightNumber
            option.textContent = `(${f.flightNumber}): ${f.departureAirport} -> ${f.arrivalAirport}`
            flightSelect.appendChild(option)
        })
    } catch (error) {
        console.error('Failed to load passengers or flights:', error)
    }
})
