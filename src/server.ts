import fastify from 'fastify'
import { createUser } from './http/routes/create-user'
import { login } from './http/routes/login'
import { createAddress } from './http/routes/create-address'
import { CreateUserProfissional } from './http/routes/create-user-profissional'
import { createUserJuridical } from './http/routes/user-juridical'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
     // Configuração para aceitar requisições de qualquer domínio
     origin: "*", // Use "*" para permitir todas as origens
});

app.get('/hello', () => {
     return 'Hello world'
})

app.register(login)
app.register(createUser)
app.register(createAddress)
app.register(createUserJuridical)
app.register(CreateUserProfissional)


app.listen({
     host: '0.0.0.0',
     port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
     console.log('HTTP Server Running')
})