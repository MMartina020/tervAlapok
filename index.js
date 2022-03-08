/*
Ételnyílvántartás
------------------------------------------------------------------------------------------------
etel{
    id: szám?
    nev: string,
    szint: szám (0-5; 0, ha a számba se veszem 5, ha nagyon szeretem)
}
 Új étel felvétele: 
 - POST : /etel
*-- be és ki paraméterek leírása

 Ételek listázása:
 - GET : /etelek
*--
 Egy étel listázása: 
 - GET : /etel/:id
*--
 Étel törlése:
 - DELETE : /etel/:id
*--
 Étel keresése:
 - POST : /keres
*--
 Étel módosítása:
 - PATCH : /etel/:id
 *--
*/

const express = require('express');
const app = express();
const port = 4444;
const uuid = require('uuid'); //így használom

app.get('/', (req, res) => {
  res.status(200).send(`Hello World! id: ${uuid.v4()}`); //így generálok számot
})

app.get('/etelek/:id',  eteleklistajaMW),

app.listen(port, () => {
  console.log(`Az alkalmazás portja: ${port}`);
})


/**
 ./node_modules/.bin/nodemon
 */

/*
Amikor tervezünk ezekből szedünk ki
Create (SQL: INSERT INTO) : (POST)
Read (SQL: SELECT) : (GET)
Update (SQL: UPDATE) : (PATCH/PUT)
Delete (SQL: DELETE) : (DELETE)
*/