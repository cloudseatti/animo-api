import { z } from 'zod'
import { prisma } from "../lib/prisma"
import { FastifyInstance } from 'fastify'

export async function createUserJuridical(app: FastifyInstance) {
    app.post('/usersJuridical', async (request, reply)=>{
        const createUserJuridicalBody = z.object({
            firstName: z.string(),
            lastName: z.string(),
            cnpj: z.string(),
            dateOfBirth: z.string(),
            phoneNumber: z.string(),
            cro: z.string(),
            categoryCro: z.string(),
            email: z.string(),
            password: z.number(),
            offersOfEmail: z.boolean(),
            fantasyName: z.string(),
            corporateReason: z.string()
        })
        const {firstName, lastName, cnpj, dateOfBirth, phoneNumber, cro, categoryCro, email, password, offersOfEmail, fantasyName, corporateReason}
        = createUserJuridicalBody.parse(request.body)

        const userJuridical = await prisma.userJuridical.create({
            data: {
                firstName,
                lastName,
                cnpj,
                dateOfBirth,
                phoneNumber,
                cro,
                categoryCro,
                email,
                password,
                offersOfEmail,
                fantasyName,
                corporateReason
            }
        })
        return reply.status(201).send({UserId: userJuridical.id})
    })
}