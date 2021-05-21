import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('<ListCard />', () => {
    test('Renders correctly', async () => {
        const testProps = {
            name: 'RICK ASTLEY',
            superpower: 'Never gives you up',
            end_of_an_era: '2020-11-17T00:00:00.000+00:00',
        }

        render(<Card {...testProps} />)

        expect(await screen.findByText(testProps.name)).toHaveTextContent(testProps.name)
    })
})
