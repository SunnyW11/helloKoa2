const router = require('koa-router')()

/* 
 * 登录界面
*/
router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});


/* 
 * 接收用户名密码
*/
router.post('/signin', async (ctx, next) => {
  var
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});


router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin","*");
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = {
    url: [
      '../pic/item/pic7.jpg',
      '../pic/item/pic1.jpg',
      '../pic/item/pic2.jpg',
      '../pic/item/pic3.jpg',
      '../pic/item/pic4.jpg',
      '../pic/item/pic5.jpg',
      '../pic/item/pic6.jpg',
      '../pic/item/pic7.jpg',
    ]
  }
})

module.exports = router
