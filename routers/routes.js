const express = require('express')
const router = express.Router();

// index visualizza tutti gli elementi
router.get('/', (req, res) => {
    res.json('rotta index')
});

// show visualizza un elemento per id
router.get('/:id', (req, res) => {
    res.json('rotta show')
});

// store crea un elemento
router.post('/', (req, res) => {
    res.json('rotta store')
});

// update modifica l'elemento
// .put = tutto l'elemento .patch = una parte dell'elemento
router.put('/:id', (req, res) => {
    res.json('rotta update')
});

// delete cancella un elemento
router.delete('/:id', (req, res) => {
    res.json('rotta delete')
});

module.exports = router;