import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from '..'

// cleanup statement
afterEach(cleanup)

describe('Nav component', () => {
    // baseline
    it('renders', () => {
        render(<Nav />)
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />)

        expect(asFragment()).toMatchSnapshot()
    })
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(
            <Nav
            // categories={categories}
            // setCurrentCategory={mockSetCurrentCategory}
            // currentCategory={mockCurrentCategory}
            // contactSelected={mockContactSelected}
            // setContactSelected={mockSetContactSelected}
            />
        )

        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />)
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
        expect(getByTestId('about')).toHaveTextContent('About me')
    })
})
