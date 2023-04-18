import styled from "styled-components";

export const GameBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 75px);
    grid-template-rows: repeat(4, 75px);
    background-color: grey;
`

export const TileBox = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => {
        switch (props.variant) {
            case 0: return "tan";
            case 1: return "crimson";
            case 2: return "violet";
            case 3: return "green";
            default: return "orange"
        }
    }};
    margin: 5px;
`