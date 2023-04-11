const data = [];

(async () => {
  const database = require('../db');
  const Product = require('./model/product');

  try {
    const result = await database.sync();
    console.log(result);

    // const resultCreate = await Product.create({
    //   name: 'mouse',
    //   price: 10,
    //   description: "An USB mouse"
    // })
    // console.log(resultCreate);

    const products = await Product.findAll();
    console.log(products);

    data.push(products);
    console.log(data)

  } catch (error) {
    console.log(error);
  }
})();

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//Fazer com que o Node sirva os arquivos do app em React criado
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Lidar com as solicitações GET feitas à rota /api
app.get("/api", (req, res) => {
  res.end(JSON.stringify(data));
});

// Todas as outras solicitações GET não tratadas retornarão nosso app em React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.js'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


