var express = require('express');
var router = express.Router();

let INIT_BOOKS = {
    "books": [
      {
        "id": 108,
        "title": "Harry Porter e a Câmara Secreta",
        "src": "hp2.jpg",
        "author": "J.K. Rowling",
        "genrer": [
          "fantasia",
          "ficção"
        ]
      },
      {
        "id": 109,
        "title": "Harry Porter e o Prisioneiro de Azkaban",
        "src": "hp3.jpg",
        "author": "J.K. Rowling",
        "genrer": [
          "fantasia",
          "ficção"
        ]
      },
    ]
}

const getCurrentGreatestIndex = (books) => {
  const bookIds = books.map(book => +book.id)
  const sortedBookIdsDec = bookIds.sort((a, b) => b - a)
  const firstIndex = sortedBookIdsDec[0]
  return firstIndex
}

/* GET and POST books */
router.route('/')
  .get(function(req, res, next) {
    res.statusCode = 200
    
    res.json(
        INIT_BOOKS
    )
  })
  .post(function(req, res, next) {
    res.statusCode = 200
    
    const nextId = getCurrentGreatestIndex(INIT_BOOKS) + 1
    const newBook = { id: nextId, ...req.body}
    const INIT_BOOKS = [...INIT_BOOKS, newBook ]

    res.json(
        INIT_BOOKS
    )
  })

/* Delete and update book. */
router.route('/:id')
  .delete(function(req, res, next) {
    res.statusCode = 200

    const bookId = req.params.id
    const INIT_BOOKS = INIT_BOOKS.filter(book => book.id != bookId)

    res.json(
      bookId
    )
  })
  .put(function(req, res, next) {
    res.statusCode = 200

    const bookId = req.params.id
    const remainingBooks = [...INIT_BOOKS].filter(book => book.id !== +bookId)
    const INIT_BOOKS = [...remainingBooks, req.body ]

    res.json(
      req.body
    )
});


module.exports = router;