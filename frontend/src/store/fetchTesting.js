// FETCH REQUESTS FOR BOOKINGS

// NOTE GET BOOKINGS
fetch('/api/bookings/').then(res => res.json()).then(data => console.log(data));

// NOTE POST BOOKING
fetch('/api/bookings/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": `v1xmhE69-t-W-0whfgeTkxlCKimBRc0NY8q8`
    },
    body: JSON.stringify({
        userId: 1,
        spotId: 3,
        startDate: '2022-04-25',
        endDate: '2022-05-01',
        numGuests: 1
    })
}).then(res => res.json()).then(data => console.log(data));

// NOTE DELETE BOOKING
