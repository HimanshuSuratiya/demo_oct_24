import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../src/app/index'

test('Check user login flow', () => {
    render(<App />)
    // const heading = screen.getByText('Choose date')
    // expect(heading).toBeInTheDocument()
})