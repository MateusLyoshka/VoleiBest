import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreatePlayerController } from "../Controllers/CreatePlayerController";
import { ListPlayerController } from "../Controllers/ListPlayerControllers";
import { DeletePlayerController } from "../Controllers/DeletePlayerController";
import { LoginController } from "../Controllers/LoginController"; // Import the LoginController class
import Match from "@/app/home/yourmatches/[id]/page";
import { CreateMatchController } from "../Controllers/CreateMatchController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

// WASAAAAAAAAA
    fastify.get("/isup", async (request: FastifyRequest, reply: FastifyReply) => {
        return {hello: "world"};
    });
 
// CREATE PLAYERSSSS 
fastify.post("/player", async (request: FastifyRequest, reply: FastifyReply) => {
    return await new CreatePlayerController().handle(request, reply);
    });

// LIST PLAYERS
fastify.get("/player", async (request: FastifyRequest, reply: FastifyReply) => {
    return await new ListPlayerController().handle(request, reply);
    });

// DELETE PLAYERS
fastify.delete("/player/:playerId", async (request: FastifyRequest, reply: FastifyReply) => {
    return await new DeletePlayerController().handle(request, reply);
})

const loginController = new LoginController(); // Create an instance of LoginController

fastify.post('/login', async (request: FastifyRequest, reply: FastifyReply) => {
    return loginController.handle(request, reply);
});

fastify.post('/match', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateMatchController().handle(request, reply);
});
}