import Router from 'koa-router'
import axios from 'axios'
import {
  liveXhr
} from './urlConfig'

const router = Router()

// 直播
router.get('/live', async (ctx, next) => {
  const response = await axios.get(liveXhr)
  const data = response.data
  const result = data.substring(12, data.length - 1)
  ctx.body = JSON.parse(result)
})

export default router
