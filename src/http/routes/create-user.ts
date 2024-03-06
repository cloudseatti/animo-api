import { z } from 'zod'
import { prisma } from "../lib/prisma"
import { FastifyInstance } from 'fastify'

export async function createUser(app: FastifyInstance){
    app.post('/users', async (request, replay) => {
        const creatUserBody = z.object({
            firstName: z.string(),
            lastName: z.string(),
            cpf: z.string(),
            dateOfBirth: z.string(),
            phoneNumber: z.string(),
            email: z.string(),
            password: z.number(),
            offersOfEmail: z.boolean()
        })
        const {firstName, lastName, cpf, dateOfBirth, phoneNumber, email, password, offersOfEmail} 
        = creatUserBody.parse(request.body)
        
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                cpf,
                dateOfBirth,
                phoneNumber,
                email,
                password,
                offersOfEmail
            }
        })
        return replay.status(201).send({UserId: user.id})
    })
}