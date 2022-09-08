export type ResponseSuccess<T = unknown> = {
    status: number
    data: T
}

export type ResponseError = {
    status: number
    message: string
}

export type Response<T = unknown> = ResponseError | ResponseSuccess<T>

export const isSuccessResponse = (response: Response): response is ResponseSuccess => {
    return (response as ResponseSuccess).data !== undefined
}
