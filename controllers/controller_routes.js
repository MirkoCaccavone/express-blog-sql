// importiamo il file di connessione al database
const connection = require('../data/db');

// funzione INDEX
function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM posts'

    // eseguiamo la query
    connection.query(sql, (err, results) => {
        if (err)
            return res.status(500).json({ error: 'Database query failed' });

        res.json(results);
    });
}

// funzione destroy
function destroy(req, res) {

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // prepariamo la query
    const sql = 'DELETE FROM posts WHERE id = ?';

    // eseguiamo la query ed eliminiamo il post
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post' });
        res.sendStatus(204)
    });

}

module.exports = { index, destroy }