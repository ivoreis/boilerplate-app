import type { NextPage } from 'next'

import { baseURL } from '@/lib/config'

export type HomePageProps = {
    name: string
    data: Record<string, any>
}

const HomePage: NextPage<HomePageProps> = (props) => {
    return (
        <main>
            <h2>Hello: {props.name}</h2>
        </main>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch(`${baseURL()}/api/search`)
    const { data = {} } = await response.json()
    return {
        props: {
            name: 'John',
            data,
        },
    }
}

export default HomePage
