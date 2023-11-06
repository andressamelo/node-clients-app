import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
    async list(search) {
        let clients

        if (search) {
            clients = await sql`select * from clients where client_name ilike ${'%' + search + '%'}`
        } else {
            clients = await sql`select * from clients`
        }

        return clients
    }

    async create(client) {
        const clientId = randomUUID()
        const { client_name, client_phone,
            client_email,
            date_follow_up,
            name,
            birthday_date,
            party_date,
            party_address,
            details,
            price } = client

        await sql`insert into clients (id, client_name, client_phone, client_email, date_follow_up, name, birthday_date, party_date, party_address, details, price) VALUES (${clientId}, ${client_name}, ${client_phone}, ${client_email}, ${date_follow_up}, ${name}, ${birthday_date}, ${party_date}, ${party_address}, ${details}, ${price})`

    }

    async update(id, client) {
        const { client_name, client_phone,
            client_email,
            date_follow_up,
            name,
            birthday_date,
            party_date,
            party_address,
            details,
            price } = client

        await sql`update clients set client_name = ${client_name}, client_phone = ${client_phone}, client_email = ${client_email}, date_follow_up = ${date_follow_up},  name = ${name}, birthday_date = ${birthday_date}, party_date = ${party_date}, party_address = ${party_address}, details = ${details}, price = ${price} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete from clients where id = ${id} `
    }
}