import React from "react";
import { TileBox } from "../styles/GameStyles";

export const Tile = ({ value }) => {
    if (value !== null) {
        let color = value;
        while (color >= 4) {
            color -= 4;
        }
        return (
            <TileBox variant={color}>
                <h4>{2 ** value}</h4>
            </TileBox>
        );
    } else {
        return <TileBox variant={null} />;
    }
};
