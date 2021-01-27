const baseURL = 'https://app.afresp.org.br/AFRApi/Portal';

// Fetch para logar usuario
export function LOGIN_USER(usuario , senha ) {
    const dados = { cpf:usuario, senha:senha }
    return {
        url: baseURL + '/Login/',
        options: {
            method: 'POST',
            body: JSON.stringify(dados)      
        },
        
    }

}

// Busca informações pelo código
export function CARD_GET(body) {
    const dados = {codigo:body}
    return {
        url: baseURL + `/BuscarPin/`,
        options: {
            method: 'POST',
            body: JSON.stringify(dados)         
        },
    }
}