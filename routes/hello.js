const router = require('koa-router')()

router.get("/hello/:name", async (ctx, next) => {
  const name = ctx.params.name;
  await ctx.render("helloName", {
    name: name
  });
})

module.exports = router;