import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'

test('The entry point is rendering correctly', () => {
    render(<Page />)
    const heading = screen.getByText('Choose date')
    expect(heading).toBeInTheDocument()
})

// describe('Whether the entry point is rendering correctly', () => {
//     it('renders a heading', () => {
//         render(<Page />)
//         const heading = screen.getByText('Choose date')
//         expect(heading).toBeInTheDocument()
//     })
// })