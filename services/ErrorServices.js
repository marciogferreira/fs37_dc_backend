class ErrorServices {

    static getError(e) {
        if(e.name == 'SequelizeUniqueConstraintError') {
            let lista = e.errors.map(item => {
                return `O ${item.path} já existe.`
            })
            console.log(lista)
            return lista;
        }
        throw new Error(e)
    }
}

export default ErrorServices