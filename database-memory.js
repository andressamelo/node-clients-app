import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #clients = new Map()

    list(search) {
        return Array.from(this.#clients.entries())
            .map((clientArray) => {
                const id = clientArray[0]
                const data = clientArray[1]

                return {
                    id,
                    ...data,
                }
            })
            .filter(client => {
                if (search) {
                    return client.client_name.includes(search)
                }

                return true
            })
    }

    create(client) {
        const clientId = randomUUID()

        this.#clients.set(clientId, video)
    }

    update(id, client) {
        this.#clients.set(id, client)
    }

    delete(id) {
        this.#clients.set(id)
    }
}