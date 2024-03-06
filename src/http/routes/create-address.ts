import { z } from 'zod'
import { prisma } from "../lib/prisma"
import { FastifyInstance } from 'fastify'

export async function createAddress(app: FastifyInstance){
    app.post('/address', async (request, reply ) => {
        const createAddressBody = z.object({
                
        })
    })
}