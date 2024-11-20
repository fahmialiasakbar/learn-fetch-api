const apiUrl = 'https://jsonplaceholder.typicode.com/users'

async function fetchData() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        displayUsers(data)
    } catch (error) {
        console.log('Error:', error)
    }
}

function displayUsers(users) {
    const usersList = document.getElementById('user-list')
    
    users.forEach(user => {
        const userItem = document.createElement('div')
        userItem.classList.add('user-item')
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p class="user-company">${user.company.name}</p>
            <p class="user-email">${user.email}</p>
            <p class="user-phone">${user.phone}</p>
            <p class="user-address">${user.address.street}, ${user.address.city}</p>
        `
        usersList.appendChild(userItem)
    })
}
fetchData()
