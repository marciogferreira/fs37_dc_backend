---

```markdown
# 💻 Desafio Full Stack: CRUD de Usuários com Deploy

Este desafio tem como objetivo a criação de uma aplicação **Full Stack** utilizando tecnologias modernas tanto no front-end quanto no back-end. O projeto pode ser um sistema simples ou de médio porte, com **funcionalidade de CRUD (Criar, Ler, Atualizar, Deletar) de usuários**.

---

## 📌 Requisitos do Desafio

### 🔹 1. Frontend
Criar uma aplicação utilizando as seguintes tecnologias:
- `HTML`
- `CSS`
- `JavaScript`
- `ReactJS`

**Requisitos mínimos:**
- Interface com formulário para cadastro de usuário.
- Listagem de usuários cadastrados.
- Edição e exclusão de usuários.
- Integração com API do backend.
- Estilização básica com CSS ou biblioteca de sua escolha.

### 🔹 2. Backend
Criar uma API RESTful utilizando:
- `Node.js`
- `Express`
- `Sequelize` (ORM para banco de dados)
- Banco de dados relacional (ex: PostgreSQL, MySQL ou SQLite)

**Funcionalidades obrigatórias:**
- Endpoints para **CRUD de usuários**:
  - `POST /users` – criar novo usuário
  - `GET /users` – listar todos os usuários
  - `GET /users/:id` – buscar usuário por ID
  - `PUT /users/:id` – atualizar dados de um usuário
  - `DELETE /users/:id` – excluir um usuário
- Validações básicas nos dados enviados
- Conexão com banco de dados via Sequelize

### 🔹 3. Deploy
Realizar o deploy das duas aplicações:

#### ✅ Backend
- Hospedar no [Render](https://render.com/) ou em outra plataforma de sua escolha (ex: Railway, Heroku, Vercel).
- Certifique-se de configurar o CORS corretamente para permitir requisições do frontend.

#### ✅ Frontend
- Hospedar no [Vercel](https://vercel.com/), [Netlify](https://netlify.com/) ou outra plataforma.
- A aplicação React deve estar consumindo corretamente a API publicada.

---

## ✅ Resultado Esperado

Um sistema simples de gerenciamento de usuários, contendo:
- Interface amigável no frontend
- Funcionalidades completas de CRUD no backend
- Banco de dados persistente
- Deploy funcional com integração entre frontend e backend

---

## 📦 Extras (Opcional)
Se quiser ir além, você pode:
- Adicionar autenticação (login/senha)
- Criar feedbacks visuais com notificações (ex: Toast)
- Aplicar uma biblioteca de UI como Material UI ou Bootstrap
- Criar testes automatizados
- Adicionar upload de avatar do usuário

---

## 📂 Estrutura Sugerida

```

/frontend
├── public/
└── src/
├── components/
├── pages/
├── services/
└── App.js

/backend
├── src/
├── controllers/
├── models/
├── routes/
└── index.js

````

---

## 💡 Dicas para o Deploy

- No backend:
  - Utilize `process.env.PORT` para definir a porta dinamicamente.
  - Adicione o middleware `cors` para liberar acesso ao frontend:
    ```js
    const cors = require('cors');
    app.use(cors({ origin: 'https://seu-frontend.vercel.app' }));
    ```

- No frontend:
  - Configure o endereço da API com a URL publicada do backend (evite `localhost`).

---

## 🧪 Testando o Projeto
1. Acesse o frontend em: `https://seu-front.vercel.app`
2. O sistema deve carregar os usuários cadastrados.
3. Teste as operações de criação, edição e exclusão.

---

## 📝 Licença
Este projeto é livre para uso acadêmico e educacional.

---
````

---
