import Router from 'koa-router'
import axios from 'axios'
import {
  online
} from './urlConfig'

const router = Router()

// 主内容
router.get('/online', async (ctx, next) => {
  let response = await axios.get(online)
  console.log(11)
  ctx.body = response.data
})

export default router
