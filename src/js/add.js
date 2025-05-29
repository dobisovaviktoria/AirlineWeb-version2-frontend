document.getElementById('add-booking-form').addEventListener('submit', async e => {
    e.preventDefault()
    const passengerId = parseInt(document.getElementById('passenger-select').value, 10)
    const flightId = document.getElementById('flight-select').value

    try {
        const response = await fetch('http://localhost:8081/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ passengerId, flightId })
        })

        const message = document.getElementById('booking-message')
        message.textContent = ''
        if (response.status === 201) {
            message.textContent = 'Booking successfully added!'
            e.target.reset()
        } else {
            const error = await response.text()
            message.textContent = `Booking failed: ${error}`
        }
    } catch (err) {
        document.getElementById('booking-message').textContent = 'An error occurred.' + err
    }
})
