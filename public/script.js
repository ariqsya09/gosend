
const form = document.getElementById('myform')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    var meggedObj = {}; // constructing new obj.

    // add the form key/value pairs
    for (var [key, val] of formData.entries()) {
        meggedObj[key] = val;
    }

    fetch('http://localhost:3000/gosend', {
        method: "POST",
        // credentials: "include", // Menggunakan key saat melakukan POST
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(meggedObj)
    }).then(
        response => {
            return response.json() // Respon akan ditampilkan dalam bentuk JSON
        }
    )
    .then(data => {
        console.log(data)
    })
})