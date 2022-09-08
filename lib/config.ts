export const baseURL = () => {
    if (process.env.NODE_ENV === 'production') {
        return 'http://localhost:3000'
    }
    if (process.env.NODE_ENV === 'test') {
        return 'https://local.msw.com'
    }
    return 'http://localhost:3000'
}

const config = {
    title: 'Boilerplate App',
}

export default config
