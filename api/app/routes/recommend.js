import Router from 'koa-router'
import axios from 'axios'
import {
  recommend
} from './urlConfig'

const router = Router()

router.get('/recommend', async (ctx, next) => {
  let response = await axios.get(recommend)
  ctx.body = response.data
})

export default router
