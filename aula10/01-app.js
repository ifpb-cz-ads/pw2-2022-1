const express = require("express");

const app = express();

app.get("/pw1/:id", (request, response) => {
    //const user = request.params.user;
    const id = parseInt(request.params.id, 10);
    //response.send(`Bem-vindo(a) a pagina de PW1, ${user}!`);
    response.send(`Seu id é, ${id}!`);
});

app.use((request, response) => {
    response.status(404).send("Página não encontrada!");
});

app.listen(3000);
