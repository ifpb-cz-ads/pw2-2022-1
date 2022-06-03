const express = require("express");

const app = express();

app.get("/busca", (request, response) => {
    const consulta = request.query.q;
    response.send(`Sua consulta foi: ${consulta}`);
});

app.use((request, response) => {
    response.status(404).send("Página não encontrada!");
});

app.listen(3000);
