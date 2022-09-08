import { rest } from 'msw'
import { baseURL } from '@/lib/config'

const search = rest.get(`${baseURL()}/api/search`, (_req, res, ctx) => {
    return res(ctx.json({ data: 'search' }))
})

export const handlers = [search]
