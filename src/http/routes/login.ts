import { object, record, z } from 'zod'
import { prisma } from "../lib/prisma"
import { FastifyInstance } from 'fastify'

export async function login(app: FastifyInstance) {
    app.post('/login', async (request, reply) => {
        const loginBody = z.object({
            email: z.string().email(),
            password: z.number()
        });

        try {
            const { email, password } = loginBody.parse(request.body);
            // Verificar se o usuário existe
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            });
            if (!user) {
                return reply.status(401).send({ error: 'Unauthorized', message: 'Usuário não encontrado.' });
            }

            // Verificar se a senha está correta
            if (user.password !== password) {
                return reply.status(401).send({ error: 'Unauthorized', message: 'Senha incorreta.' });
            }

            return reply.status(201).send({UserId: user.id})

        } catch (error) {

        }

    })

    }