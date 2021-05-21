import React from 'react'
import styled from 'styled-components'
import { Item } from '.'
import Card from './Card'

const StyledList = styled.ul`
    list-style: none;
    // reset default ul padding and margin
    margin: 0;
    padding: 0;
`

interface Props {
    data: Item[]
}

const List: React.FC<Props> = ({ data }) => {
    return (
        <StyledList>
            {data.map((item, index: number) => {
                const { name, end_of_an_era, superpower } = item
                return (
                    <Card
                        key={index}
                        name={name}
                        superpower={superpower}
                        end_of_an_era={end_of_an_era}
                    />
                )
            })}
        </StyledList>
    )
}

export default List
