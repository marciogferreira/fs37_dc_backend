const axios = require('axios')

const Api = axios.create({
    baseURL: 'http://localhost:3000/'
})

async function autenticar() {
    const response = await Api.post('login', {
        email: 'admin1@admin.com.br',
        senha: '123456'
    });
    return response;
}


async function getToken() {
    const response = await Api.post('login', {
        email: 'admin1@admin.com.br',
        senha: '123456'
    });
    return response.data.token;
}

module.exports = {
    autenticar,
    getToken,
    Api
}