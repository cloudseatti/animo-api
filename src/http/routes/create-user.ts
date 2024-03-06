import { z } from 'zod'
import { prisma } from "../lib/prisma"
import { FastifyInstance } from 'fastify'

export async function createUser(app: FastifyInstance) {
    app.post('/users', async (request, replay) => {
        const creatUserBody = z.object({
            bairro: z.string(),
            cep: z.string(), // Validação simples de CEP
            cidade: z.string(),
            complemento: z.string().optional(), // Campo opcional
            confirmEmail: z.string().email(),
            confirmPassword: z.string(),
            cpf: z.string(), // Validação simples de CPF
            dateOfBirth: z.string(), // ou z.date() se você deseja trabalhar com objetos Date
            email: z.string().email(),
            lastName: z.string(),
            logradouro: z.string(),
            name: z.string(),
            numero: z.string(),
            password: z.string(),
            telefoneCelular: z.string(), // Validação simples de telefone celular
            uf: z.string().length(2), // Valida UF com exatamente 2 caractere
        })
        const { bairro,
            cep,
            cidade,
            complemento,
            confirmEmail,
            confirmPassword,
            cpf,
            dateOfBirth,
            email,
            lastName,
            logradouro,
            name,
            numero,
            password,
            telefoneCelular,
            uf }
            = creatUserBody.parse(request.body)

        const user = await prisma.user.create({
            data: {
                bairro,
                cep,
                cidade,
                complemento,
                cpf,
                dateOfBirth,
                email,
                lastName,
                logradouro,
                name,
                numero,
                password,
                telefoneCelular,
                uf
            }
        })
        return replay.status(201).send({ UserId: user.id })
    })
}