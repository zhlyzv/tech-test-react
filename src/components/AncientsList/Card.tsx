import React from 'react'
import styled from 'styled-components'
import { Item } from './index'

const Wrapper = styled.li`
    margin-bottom: 15px;
    padding: 20px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    min-width: 300px;
    width: 100%;
    transition: box-shadow 300ms ease;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Attribute = styled.div`
    margin-bottom: 5px;

    .name {
        font-weight: bold;
        font-size: 0.8rem;
    }
`

const Card: React.FC<Item> = ({ name, superpower, end_of_an_era }) => {
    const eraEnd = new Date(end_of_an_era).toUTCString()

    return (
        <Wrapper>
            <h2>{name.toUpperCase()}</h2>

            <Attribute>
                <span className="name">Superpower:</span>{' '}
                <span className="value">{superpower.toUpperCase()}</span>
            </Attribute>

            <Attribute>
                <span className="name">End of Era:</span> <span className="value">{eraEnd}</span>
            </Attribute>
        </Wrapper>
    )
}

export default Card
