import { object, record, z } from 'zod'
import { prisma } from "../lib/prisma"
import fastify, { FastifyInstance } from 'fastify'

export async function CreateUserProfissional(app: FastifyInstance){

    app.post('/Profissionals', async (request, reply) => {
        const creatUserProfissional = z.object({
            firstName: z.string(),
            lastName: z.string(),
            cpf: z.string(),
            dateOfBirth: z.string(),
            phoneNumber: z.string(),
            cro: z.string(),
            categoryCro: z.string(),
            email: z.string(),
            password: z.number(),
            offersOfEmail: z.boolean()
        });

        const {firstName, lastName, cpf, dateOfBirth, phoneNumber, cro, categoryCro, email, password, offersOfEmail} 
        = creatUserProfissional.parse(request.body)

        const userProfissional = await prisma.userProfissional.create({
            data: {
                firstName,
                lastName,
                cpf,
                dateOfBirth,
                phoneNumber,
                cro,
                categoryCro,
                email,
                password,
                offersOfEmail
            }
        })
        return reply.status(201).send({UserId: userProfissional.id})
    })        
}