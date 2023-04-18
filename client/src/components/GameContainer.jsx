import React, { useState } from "react";
import { GameBoard } from "../styles/GameStyles";
import { Tile } from "./Tile";

export const GameContainer = () => {
    const [rowOne, setRowOne] = useState([0, null, 0, null]);
    const [rowTwo, setRowTwo] = useState([null, null, null, null]);
    const [rowThree, setRowThree] = useState([null, null, null, null]);
    const [rowFour, setRowFour] = useState([null, null, null, null]);

    const board = [rowOne, rowTwo, rowThree, rowFour];

    const mergeLeft = () => {
        let row = rowOne;
        let marker = 0;
        while (row.slice(marker, -1).some((val) => val !== null)) {
            if (row[marker] === null) {
                row.pop(marker);
                row.push(null);
            }
            marker++;
        }
        setRowOne(row);
    };

    let i = -1;

    const renderBoard = board.map((row) => {
        return row.map((val) => {
            i >= 15 ? (i = -1) : i++;
            return <Tile key={i} value={val} />;
        });
    });

    return (
        <GameBoard>
            {renderBoard}
            <button onClick={mergeLeft}>Left</button>
        </GameBoard>
    );
};
