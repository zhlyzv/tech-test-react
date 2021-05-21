import React from 'react'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import AncientList from './index'
import { API_ENDPOINT } from '../../constants'

describe('<AncientsList/>', () => {
    beforeAll(() => jest.spyOn(window, 'fetch'))

    // TODO: Improve tests, mock an actual response
    test('Renders <AncientsList/> component', async () => {
        render(<AncientList />)

        // Wait for the initial data fetch to complete and the loader to be removed
        await waitForElementToBeRemoved(() => screen.getByText('Loading..'))

        expect(window.fetch).toHaveBeenCalledTimes(1)
        expect(window.fetch).toHaveBeenCalledWith(API_ENDPOINT)
    })
})
