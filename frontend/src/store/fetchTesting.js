
// NOTE GET
fetch('/api/bookings/').then(res => res.json()).then(data => console.log(data));


// NOTE POST
fetch('/api/bookings/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": `gtCW7RUs-HQ0x1gZON5ZMz1rd5Vh4kdd1YHo`
    },
    body: JSON.stringify({
        userId: 1,
        spotId: 2,
        startDate: '2022-05-17 12:00:00 UTC',
        endDate: '2022-05-20 12:00:00 UTC',
        numGuests: 2
    })
}).then(res => res.json()).then(data => console.log(data));



// NOTE DELETE
fetch('/api/bookings/:bookingId', {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": `gtCW7RUs-HQ0x1gZON5ZMz1rd5Vh4kdd1YHo`
    }
}).then(res => res.json()).then(data => console.log(data));
