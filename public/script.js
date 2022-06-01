
const form = document.forms.myform
var namaPengirim = document.getElementById("namaPengirim").value
var noTelpPengirim = document.getElementById("noTelpPengirim").value
var alamatPengirim = document.getElementById("alamatPengirim").value
var namaPenerima = document.getElementById("namaPenerima").value
var noTelpPenerima = document.getElementById("noTelpPenerima").value
var alamatPenerima = document.getElementById("alamatPenerima").value
var jenisBarang = document.getElementById("jenisBarang").value
var beratBarang = document.getElementById("beratBarang").value
const sbmtBtn = document.getElementById("sbmtBtn")
form.addEventListener("submit",(e) => {
    e.preventDefault()
    console.log('tes')
    // const formData = new FormData(form)
    // const username = formData.get('username')
    // const password = formData.get('password')

    fetch('http://localhost:3000/gosend', {
        method: "POST",
        // credentials: "include", // Menggunakan key saat melakukan POST
        headers: {
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
            namaPengirim:namaPengirim,
            noTelpPengirim:noTelpPengirim,
            alamatPengirim:alamatPengirim,
            namaPenerima:namaPenerima,
            noTelpPenerima:noTelpPenerima,
            alamatPenerima:alamatPenerima,
            jenisBarang:jenisBarang,
            beratBarang:beratBarang
        })
    }).then(
        response => {
            console.log(response.json()) // Respon akan ditampilkan dalam bentuk JSON
        }
    )
})