const autenticacao = require('./autenticacao')
test('Listar Usuarios', async () => {
    const token = await autenticacao.getToken();

    const response = await autenticacao.Api.get('usuarios', {
        headers: {
            'token': token
        }
    });
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.data.length).not.toBe(0)
});


test('Criar Usuarios', async () => {
    const token = await autenticacao.getToken();
    let numRandom = Math.random() * 10000000
    numRandom = Math.floor(numRandom)
    const dados = {
        "nome": "Max 2",
        "email": `admin${numRandom}@gmail.com`,
        "senha": "123123",
        "status": true
    }
    const response = await autenticacao.Api.post('usuarios', dados, {
        headers: {
            'token': token
        }
    });
    expect(response.status).toBe(201)
    expect(response.statusText).toBe('Created')
});

test('Atualizar Usuarios', async () => {
    const token = await autenticacao.getToken();
    let numRandom = Math.random() * 10000000
    numRandom = Math.floor(numRandom)
    const dados = {
        "nome": "Max 2",
        "email": `admin${numRandom}@gmail.com`,
        "senha": "123123",
        "status": true
    }
    const response = await autenticacao.Api.put('usuarios/1', dados, {
        headers: {
            'token': token
        }
    });
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
});

test('Deletar Usuarios', async () => {
    const token = await autenticacao.getToken();
    let numRandom = Math.random() * 10000000
    numRandom = Math.floor(numRandom)
   
    const response = await autenticacao.Api.delete('usuarios/1', {
        headers: {
            'token': token
        }
    });
    expect(response.status).toBe(204)
    expect(response.statusText).toBe('No Content')
});