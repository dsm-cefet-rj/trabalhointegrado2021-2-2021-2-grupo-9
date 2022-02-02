var express = require('express');
var router = express.Router();

/* GET users listing. */
let planos = [
    { 
      "id": 101,
      "nome": "Start",
      "desc1": "1 mês gratis",
      "desc2": "2 livros por mês",
    },
    {
      "id": 102,
      "nome": "Pro",
      "desc1": "1 mês gratis",
      "desc2": "6 livros por mês",
    },
    { 
      "id": 103,
      "nome": "VIP",
      "desc1": "1 mês gratis",
      "desc2": "Livros ilimitados"
    }
  ]

router.route('/')
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(planos);
})

router.route('/:id')
.delete((req, res, next) => {
  planos.filter((plano) => plano.id != req.params.id);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(planos);
})

.put((req, res, next) => {
  const plano = planos.find(plano => plano.id == req.params.id);
  planos.splice(planos.indexOf(plano), 1, { ...plano, ...req.body });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})

module.exports = router;