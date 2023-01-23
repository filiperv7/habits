import cors from '@fastify/cors';
import fastify from "fastify";
import { appRoutes as Routes } from "./routes";

const app = fastify()

app.register(cors)
app.register(Routes)

app.listen({
    port: 3333
}).then(() => {
    console.log('Server Running!')
})