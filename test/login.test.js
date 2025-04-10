const autenticacao = require('./autenticacao')

test('Login', async () => {
    const response = await autenticacao.autenticar();
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.data.token).not.toBeNull()
})