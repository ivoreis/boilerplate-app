import { expect, test, describe, beforeEach } from 'vitest'
import { render, screen, within, cleanup } from '@testing-library/react'
import Home from '@/pages/index'

beforeEach(cleanup)

describe('Home', () => {
    test('it renders correctly', async () => {
        render(<Home name="John" />)
        const main = within(screen.getByRole('main'))
        expect(main).toBeTruthy()

        const header = await main.findByRole('heading', { level: 2 })
        expect(header.textContent).toBe('Hello: John')
    })
})
