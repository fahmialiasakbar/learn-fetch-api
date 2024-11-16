const apiUrl = 'https://jsonplaceholder.typicode.com/users'

function fetchData() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayUsers(data)
    })
    .catch(error => console.error('Error:', error))
}

function displayUsers(users) {
    const usersList = document.getElementById('user-list')
    
    users.forEach(user => {
        const userItem = document.createElement('div')
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Alamat: ${user.address.street}, ${user.address.city}</p>
        `

        usersList.appendChild(userItem)
    })
}
fetchData()
