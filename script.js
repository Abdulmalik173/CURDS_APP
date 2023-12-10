// All Main Variables 
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = 'Come Back 😢'
    } else {
        document.title = 'Welcome !'
    }
});

let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let categoryBtn = document.getElementById('categoryBtn')
let createBtn = document.getElementById('createBtn')

// Get Total

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = '#040'
    } else {
        total.innerHTML = ''
        total.style.backgroundColor = '#dc143c'
    }
}

// Create Product

let dataProduct;
if (localStorage.product != null) {
    dataProduct = JSON.parse(localStorage.product)
} else {
    dataProduct = []
}

createBtn.addEventListener('click', () => {
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    dataProduct.push(newProduct)
    localStorage.setItem('product', JSON.stringify(dataProduct))
    clearInputs()
})

// Clear all inputs

function clearInputs() {
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''
}

// Read data

function showData() {
    let table = ''
    for(let i = 0; i < dataProduct.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataProduct[i].title}</td>
            <td>${dataProduct[i].price}</td>
            <td>${dataProduct[i].taxes}</td>
            <td>${dataProduct[i].ads}</td>
            <td>${dataProduct[i].discount}</td>
            <td>${dataProduct[i].total}</td>
            <td>${dataProduct[i].category}</td>
            <td><button id="update">Update <i style="margin-left: 2px;" class="fa-regular fa-pen-to-square"></i></button></td>
            <td><button onclick=deleteData(${i}) id="delete">Delete <i style="margin-left: 2px;" class="fa-regular fa-trash-can"></i></button></td>
    </tr>
        `
    }

    document.getElementById('tbody').innerHTML = table
}

showData()

// Delete data

function deleteData(i) {
    dataProduct.splice(i, 1)
    localStorage.product = JSON.stringify(dataProduct)
    showData()
}

// Update data
// Search data
// Clean data