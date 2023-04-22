import React, { useEffect, useState } from "react";
import { GameBoard } from "../styles/GameStyles";
import { Tile } from "./Tile";
import { mergeRow } from "../logic/mergeScripts";

export const GameContainer = () => {
    const [tile0, setTile0] = useState(0);
    const [tile1, setTile1] = useState(0);
    const [tile2, setTile2] = useState(0);
    const [tile3, setTile3] = useState(0);
    const [tile4, setTile4] = useState(0);
    const [tile5, setTile5] = useState(0);
    const [tile6, setTile6] = useState(0);
    const [tile7, setTile7] = useState(0);
    const [tile8, setTile8] = useState(0);
    const [tile9, setTile9] = useState(0);
    const [tile10, setTile10] = useState(0);
    const [tile11, setTile11] = useState(0);
    const [tile12, setTile12] = useState(0);
    const [tile13, setTile13] = useState(0);
    const [tile14, setTile14] = useState(0);
    const [tile15, setTile15] = useState(0);

    let tileSet = [
        tile0,
        tile1,
        tile2,
        tile3,
        tile4,
        tile5,
        tile6,
        tile7,
        tile8,
        tile9,
        tile10,
        tile11,
        tile12,
        tile13,
        tile14,
        tile15,
    ];

    const randTile = () => {
        return Math.floor(Math.random() * 15);
    };

    const newTile = () => {
        let validTiles = tileSet.map((e) => e === 0);
        let position = randTile();
        while (!validTiles[position]) {
            position = randTile();
        }
        switch (position) {
            case 0:
                setTile0(1);
                break;
            case 1:
                setTile1(1);
                break;
            case 2:
                setTile2(1);
                break;
            case 3:
                setTile3(1);
                break;
            case 4:
                setTile4(1);
                break;
            case 5:
                setTile5(1);
                break;
            case 6:
                setTile6(1);
                break;
            case 7:
                setTile7(1);
                break;
            case 8:
                setTile8(1);
                break;
            case 9:
                setTile9(1);
                break;
            case 10:
                setTile10(1);
                break;
            case 11:
                setTile11(1);
                break;
            case 12:
                setTile12(1);
                break;
            case 13:
                setTile13(1);
                break;
            case 14:
                setTile14(1);
                break;
            default:
                setTile15(1);
        }
    };

    const resetBoard = () => {
        setTile0(0);
        setTile1(0);
        setTile2(0);
        setTile3(0);
        setTile4(0);
        setTile5(0);
        setTile6(0);
        setTile7(0);
        setTile8(0);
        setTile9(0);
        setTile10(0);
        setTile11(0);
        setTile12(0);
        setTile13(0);
        setTile14(0);
        setTile15(0);
    };

    useEffect(() => {
        resetBoard();
        newTile();
        newTile();
    }, []);

    const left = () => {
        let row0 = mergeRow([tile0, tile1, tile2, tile3]);
        let row1 = mergeRow([tile4, tile5, tile6, tile7]);
        let row2 = mergeRow([tile8, tile9, tile10, tile11]);
        let row3 = mergeRow([tile12, tile13, tile14, tile15]);
        setTile0(row0[0]);
        setTile1(row0[1]);
        setTile2(row0[2]);
        setTile3(row0[3]);
        setTile4(row1[0]);
        setTile5(row1[1]);
        setTile6(row1[2]);
        setTile7(row1[3]);
        setTile8(row2[0]);
        setTile9(row2[1]);
        setTile10(row2[2]);
        setTile11(row2[3]);
        setTile12(row3[0]);
        setTile13(row3[1]);
        setTile14(row3[2]);
        setTile15(row3[3]);
        newTile();
    };

    const right = () => {
        let row0 = mergeRow([tile3, tile2, tile1, tile0]);
        row0.reverse();
        let row1 = mergeRow([tile7, tile6, tile5, tile4]);
        row1.reverse();
        let row2 = mergeRow([tile11, tile10, tile9, tile8]);
        row2.reverse();
        let row3 = mergeRow([tile15, tile14, tile13, tile12]);
        row3.reverse();
        setTile0(row0[0]);
        setTile1(row0[1]);
        setTile2(row0[2]);
        setTile3(row0[3]);
        setTile4(row1[0]);
        setTile5(row1[1]);
        setTile6(row1[2]);
        setTile7(row1[3]);
        setTile8(row2[0]);
        setTile9(row2[1]);
        setTile10(row2[2]);
        setTile11(row2[3]);
        setTile12(row3[0]);
        setTile13(row3[1]);
        setTile14(row3[2]);
        setTile15(row3[3]);
        newTile();
    };
    const up = () => {
        let col0 = mergeRow([tile0, tile4, tile8, tile12]);
        let col1 = mergeRow([tile1, tile5, tile9, tile13]);
        let col2 = mergeRow([tile2, tile6, tile10, tile14]);
        let col3 = mergeRow([tile3, tile7, tile11, tile15]);
        setTile0(col0[0]);
        setTile1(col1[0]);
        setTile2(col2[0]);
        setTile3(col3[0]);
        setTile4(col0[1]);
        setTile5(col1[1]);
        setTile6(col2[1]);
        setTile7(col3[1]);
        setTile8(col0[2]);
        setTile9(col1[2]);
        setTile10(col2[2]);
        setTile11(col3[2]);
        setTile12(col0[3]);
        setTile13(col1[3]);
        setTile14(col2[3]);
        setTile15(col3[3]);
        newTile();
    };
    const down = () => {
        let col0 = mergeRow([tile12, tile8, tile4, tile0]);
        col0.reverse();
        let col1 = mergeRow([tile13, tile9, tile5, tile1]);
        col1.reverse();
        let col2 = mergeRow([tile14, tile10, tile6, tile2]);
        col2.reverse();
        let col3 = mergeRow([tile15, tile11, tile7, tile3]);
        col3.reverse();
        setTile0(col0[0]);
        setTile1(col1[0]);
        setTile2(col2[0]);
        setTile3(col3[0]);
        setTile4(col0[1]);
        setTile5(col1[1]);
        setTile6(col2[1]);
        setTile7(col3[1]);
        setTile8(col0[2]);
        setTile9(col1[2]);
        setTile10(col2[2]);
        setTile11(col3[2]);
        setTile12(col0[3]);
        setTile13(col1[3]);
        setTile14(col2[3]);
        setTile15(col3[3]);
        newTile();
    };

    const handleClick = (e) => {
        switch (e.target.value) {
            case "left":
                return left();
            case "right":
                return right();
            case "up":
                return up();
            default:
                return down();
        }
    };

    return (
        <GameBoard>
            <Tile value={tile0} />
            <Tile value={tile1} />
            <Tile value={tile2} />
            <Tile value={tile3} />
            <Tile value={tile4} />
            <Tile value={tile5} />
            <Tile value={tile6} />
            <Tile value={tile7} />
            <Tile value={tile8} />
            <Tile value={tile9} />
            <Tile value={tile10} />
            <Tile value={tile11} />
            <Tile value={tile12} />
            <Tile value={tile13} />
            <Tile value={tile14} />
            <Tile value={tile15} />
            <button onClick={handleClick} value="left">
                left
            </button>
            <button onClick={handleClick} value="right">
                right
            </button>
            <button onClick={handleClick} value="up">
                up
            </button>
            <button onClick={handleClick} value="down">
                down
            </button>
        </GameBoard>
    );
};
