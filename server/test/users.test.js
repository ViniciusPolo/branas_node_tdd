const axios = require('axios')

test('Should get users', async function (){
    const response = await axios({
        url: 'http://localhost:3000/users',
        method: 'get'
    })
    //console.log(response)
    const users = response.data
    expect  (users).toHaveLength(3)
    const [firstUsers] = users
    expect (firstUsers.id).toBe(1)
    expect (firstUsers.name).toBe("João Paulo")

})