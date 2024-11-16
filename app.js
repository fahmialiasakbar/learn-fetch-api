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
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Alamat: ${user.address.street}, ${user.address.city}</p>
            <p>Phone: ${user.phone}</p>
            <p>Company: ${user.company.name}</p>
            `
        usersList.appendChild(userItem)
    })
}
fetchData()
