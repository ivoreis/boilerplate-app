import type { NextApiRequest, NextApiResponse } from 'next'
import { Response, isSuccessResponse } from '@/lib/models/http'

export type ResponseType = Record<string, any>

export const process = async (): Promise<Response<ResponseType>> => {
    return {
        data: {},
        status: 200,
    }
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const response = await process()
    return isSuccessResponse(response)
        ? res.status(response.status).json(response.data)
        : res.status(response.status).json({ error: response.message })
}
