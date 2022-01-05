const Koa = require('koa');
const app = new Koa();

app.use((ctx,next) => {
    if(ctx.url==="/"){
     ctx.response.set("Content-Type","text/html; charset=utf-8");
     ctx.body = '<h1>Index Sayfasına Hoşgeldiniz</h1>';
    }
    else{
        next();
        }
});
app.use((ctx,next) => {
    if(ctx.url==="/about"){
        ctx.response.set("Content-Type","text/html; charset=utf-8");
        ctx.body = '<h1>About Sayfasına Hoşgeldiniz</h1>';
    }
    else{
    next();
    }
});
app.use((ctx,next) => {
    if(ctx.url==="/contact"){
        ctx.response.set("Content-Type","text/html; charset=utf-8");
        ctx.body = '<h1>Contact Sayfasına Hoşgeldiniz</h1>';
    }
    else{
        next();
        }
});
app.use((ctx,next) => {
    
  ctx.status=404; 
  ctx.body="404 Page Not Found"
 });


app.listen(3000);
