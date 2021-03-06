async function catchError(ctx, next) {
  try {
    await next()
    if (ctx.status === 400) ctx.throw(404)
  } catch (err) {
    let status = err.status || 500
    ctx.status = status
    ctx.state = {
      status: status,
      helpers: helpers,
      currentUser: null
    }
    await ctx.render('error/error', {})
    if (status === 500) {
      console.log('server error', err, ctx)
    }
  }
}
