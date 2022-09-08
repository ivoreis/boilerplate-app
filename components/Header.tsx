import config from '@/lib/config'

export default function Header() {
    return (
        <header>
            <h1>{config.title}</h1>
        </header>
    )
}
