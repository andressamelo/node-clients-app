import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log('Tabela deletada!')
// })

sql `
    CREATE TABLE clients (
        id TEXT PRIMARY KEY,
        client_name VARCHAR(255),
        client_phone VARCHAR(20),
        client_email VARCHAR(255),
        date_follow_up DATE,
        name VARCHAR(255),
        birthday_date DATE,
        party_date DATE,
        party_address VARCHAR(255),
        details TEXT,
        price NUMERIC(10, 2)
    );
`.then(() => {
    console.log('Tabela Criada!')
})
