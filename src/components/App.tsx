import React from 'react'
import AncientList from './AncientsList'
import Layout from './ui/layout'
import { SWRConfig } from 'swr'
import fetcher from '../lib/fetcher'

function App() {
    return (
        <Layout>
            {/* Add fetcher through global config so we don't have to pass it to each function */}
            <SWRConfig value={{ fetcher }}>
                <AncientList />
            </SWRConfig>
        </Layout>
    )
}

export default App
