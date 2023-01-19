// const product = {
//     'brand': 'Curso Cristiano Deiner y Julissa',
//     'price': 2,
//     'img_url': 'https://st3.depositphotos.com/4201529/18011/i/600/depositphotos_180115020-stock-photo-golden-lion-tamarin-on-nature.jpg',
//     'available': true
// }

const delete1 = '63c9049e5571f96e99808d65'
const delete2 = '63c9041a5571f96e99808d61'
const delete3 = '63c904105571f96e99808d5e'



// const petitionDelete = {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ brand: 'Nuevo café' })
// }
// const petitionCreate = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(product)
// }


const button = document.querySelector('button')
const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')



form1.addEventListener('submit', (event) => {
    event.preventDefault()
    const product = {
        'brand': event.target.nombre.value,
        'price': event.target.precio.value,
        'img_url': 'https://st3.depositphotos.com/4201529/18011/i/600/depositphotos_180115020-stock-photo-golden-lion-tamarin-on-nature.jpg',
        'available': true
    }
    fetch('https://cafe-de-altura-api.vercel.app/api/products/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
        .then(res => console.log(res))

})
form2.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('https://cafe-de-altura-api.vercel.app/api/products/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({brand: event.target.nombre.value})
    })
        .then(res => res.json())
        

})

button.addEventListener('click', () => {

    fetch('https://cafe-de-altura-api.vercel.app/api/products')
        .then(res => res.json())
        .then(res => console.log(res))
})


// fetch('https://cafe-de-altura-api.vercel.app/api/products/create',petitionCreate)
//     .then(res => res.json())
//     .then(res => console.log(res))


// fetch('https://cafe-de-altura-api.vercel.app/api/products')
// .then(res=> res.json())
// .then(res=> console.log(res))







    // fetch('https://cafe-de-altura-api.vercel.app/api/products/delete',{
    //     method:'DELETE',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({brand: `Cafe Millard`})
    // }
    // )




