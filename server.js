// import { DatabaseMemory } from './database-memory.js'

import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()
const database = new DatabaseMemory()
// const database = new DatabasePostgres()

server.post('/clients', async (request, reply) => {
   const { client_name, client_phone, client_email, date_follow_up, name, birthday_date, party_date, party_address, details, price } = request.body
   
    await database.create({
        client_name,
        client_phone,
        client_email,
        date_follow_up,
        name,
        birthday_date,
        party_date,
        party_address,
        details,
        price,
    })

    return reply.status(201).send()
})

server.get('/clients', async (request) => {
    const search = request.query.search

    const clients = await database.list(search)

    return clients
})

server.put('/clients/:id', async (request, reply) => {
    const clientId = request.params.id
    const { client_name, client_phone, client_email, date_follow_up, name, birthday_date, party_date, party_address, details, price } = request.body

    await database.update(clientId, {
        client_name,
        client_phone,
        client_email,
        date_follow_up,
        name,
        birthday_date,
        party_date,
        party_address,
        details,
        price,
    })

    return reply.status(204).send()
})

server.delete('/clients/:id', async (request, reply) => {
    const clientId = request.params.id

    await database.delete(clientId)
    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})