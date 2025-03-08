# express-blog-sql

1. creiamo la repo su github

2. in VScode
    2.1 cloniamo la repo su VScode
    2.2 npm init
    2.3 npm i express
    2.4 npm i cors 
    2.5 creiamo il file .gitignore e inseriamo la rotta del node_modules
    2.6 creiamo il file principale (app.js)

3. in package.json impostiamo i comandi start e watch

4. in app.js
    4.1 importiamo i moduli express e cors
    4.2 avviamo il server sulla rotta specificata e impostiamo un console.log come riscontro
    4.3 settiamo il middleware CORS     

5. creiamo le cartelle che ci serviranno (controllers- data - middleware - public - routers)

6. in routers
    6.1 creiamo il file per le nostre rotte (routes.js)
    6.2 in routes.js
        6.2.1 importiamo il modulo express
        6.2.2 creiamo un router utilizzando express 
        6.2.3 settiamo le nostre rotte 
        6.2.4 esportiamo il modulo

7. in app.js
    7.1 importiamo il router
    7.2 Usiamo il router per le richieste alla route ('/posts')
    7.3 impostiamo anche un messaggio per la rootta principale
    7.4 registriamo il body-parser
    7.5 rendiamo accessibili i file statici

8. in middlewere 
    8.1 creiamo i file per l'errore 404 (notFound.js) 
    8.2 creiamo il file per l'errore del server 500(errorsHandler.js)
    8.3 importiamoli e usiamoli in app.js


9. installiamo il pacchetto mysql2  (npm install mysql2)

10. in data creiamo il nostro file del database (db.js)

11. in db.js impostiamo la configurazione di MySQL

12. in controllers creiamo un file per definire le funzioni di ogni rotta (controller_routes.js)

13. in controller_routes.js
    13.1 importiamo il file di connessione al database
    13.2 definiamo le funzioni per le rotte 
    

 
