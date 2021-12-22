
const ESTADOS = [
    {
        sigla: "AC",
        nome: "Acre"
    },
    {
        sigla: "AL",
        nome: "Alagoas"
    },
    {
        sigla: "AP",
        nome: "Amapá"
    },
    {
        sigla: "BA",
        nome: "Bahia"
    },
]

const ACCOUNT_FIELDS = [ 
    { name: "name", label: "Nome e sobrenome", type: "text", placeholder: ""},
    { name: "email", label: "E-mail", type: "email", placeholder: "seuemail@dominio.com"},
    { name: "cpf", label: "Seu CPF", type: "number", placeholder: "XXX.XXX.XXX-XX"},
    { name: "telefone", label: "Telefone", type: "tel", placeholder: "(XX) XXXX-XXXX"},
    { name: "datanasc", label: "Data de nascimento", type: "number", placeholder: ""},
    { name: "password", label: "Crie uma senha", type: "password", placeholder: ""},
    { name: "repeat", label: "Repetir a senha", type: "password", placeholder: ""},
]

const ADRESS_FIELDS = [ 
    { name: "cep", label: "CEP", type: "text", placeholder: "XXXXX-XXX"},
    { name: "rua", label: "Rua", type: "text", placeholder: ""},
    { name: "numero", label: "Número", type: "number", placeholder: ""},
    { name: "cidade", label: "Cidade", type: "text", placeholder: ""},
]

const BOOK_GENRES = ['Ficção Literária', 'Não-Ficção', 'Suspense', 'Fantasia', 'Horror', 'Poesia', 'Romance']

export { ACCOUNT_FIELDS, ADRESS_FIELDS, BOOK_GENRES, ESTADOS}