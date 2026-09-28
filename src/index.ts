import { Elysia } from "elysia";
import { ENV } from "./env";

const app = new Elysia().get("/", () => "Hello Elysia").listen(ENV.PORT);

console.log(`🦊 Elysia is running at ${app.server?.url}`);
