import React from "react";
import styled from "styled-components";

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
        font-weight: 700;
    }

`

export default ({type, from, value}) => {
    return (
        <Item>
            <span className="text">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Item>
    )
}