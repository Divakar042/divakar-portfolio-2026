import { parseVal, serveImmutableFile } from "https://esm.town/v/std/utils/index.ts";
import { Hono } from "npm:hono";
import { Root } from "./frontend/root.tsx";

const app = new Hono();

app.get("/", (c) => c.html(Root()));
app.get("/__immutable/*", (c) => serveImmutableFile(c.req.path));
app.get("/source", (c) => c.redirect(parseVal().links.self.val));
app.onError((err) => Promise.reject(err));

export default app.fetch;
