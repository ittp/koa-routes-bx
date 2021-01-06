const Koa = require("koa");
const reactView = require("koa-react-view");
const Router = require("koa-router");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");

const PORT = process.env.PORT || 3000;

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
  const name = ctx.query.name || "stranger";
  ctx.body = {
    message: `Hello, ${name}!`
  };
});
router.get("/yookassa", async (ctx) => {
  ctx.body = {
    message: `2`
  };
});

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, "0.0.0.0", () =>
    console.log(`listening on http://localhost:${PORT}...`)
  );
