import Router from 'koa-router'

import banner from './banner'
import ding from './ding'
import extra from './extra'
import live from './live'
import promote from './promote'
import rank from './rank'

const router = Router()

router.use(async (ctx, next) => {
  await next()
})

router.use(banner.routes(), banner.allowedMethods())
router.use(ding.routes(), ding.allowedMethods())
router.use(extra.routes(), extra.allowedMethods())
router.use(live.routes(), live.allowedMethods())
router.use(promote.routes(), promote.allowedMethods())
router.use(rank.routes(), rank.allowedMethods())

export default router
