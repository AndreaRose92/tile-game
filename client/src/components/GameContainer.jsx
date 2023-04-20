import React, { useState } from "react";
import { GameBoard } from "../styles/GameStyles";
import { Tile } from "./Tile";

export const GameContainer = () => {
    const [tileZero, setTileZero] = useState(0);
    const [tileOne, setTileOne] = useState(0);
    const [tileTwo, setTileTwo] = useState(0);
    const [tileThree, setTileThree] = useState(null);
    const [tileFour, setTileFour] = useState(null);
    const [tileFive, setTileFive] = useState(null);
    const [tileSix, setTileSix] = useState(null);
    const [tileSeven, setTileSeven] = useState(null);
    const [tileEight, setTileEight] = useState(null);
    const [tileNine, setTileNine] = useState(null);
    const [tileTen, setTileTen] = useState(null);
    const [tileEleven, setTileEleven] = useState(0);
    const [tileTwelve, setTileTwelve] = useState(null);
    const [tileThirteen, setTileThirteen] = useState(null);
    const [tileFourteen, setTileFourteen] = useState(null);
    const [tileFifteen, setTileFifteen] = useState(null);

    const rowOne = (direction) => {
        let row = [tileZero, tileOne, tileTwo, tileThree].filter(
            (e) => e !== null
        );
        if (row.length === 0) {
            row = [null, null, null, null];
        } else if (row.length === 1) {
            row =
                direction === "left"
                    ? [row[0], null, null, null]
                    : [null, null, null, row[0]];
        } else {
            if (direction === "left") {
                for (let i = 0; i < row.length - 1; i++) {
                    let j = i + 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j < row.length - 1) {
                            row[j] = row[j + 1];
                            j++;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.push(null);
                }
            } else if (direction === "right") {
                for (let i = row.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j > 0) {
                            row[j] = row[j - 1];
                            j--;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.unshift(null);
                }
            }
        }
        return row;
    };
    const rowTwo = (direction) => {
        let row = [tileFour, tileFive, tileSix, tileSeven].filter(
            (e) => e !== null
        );
        if (row.length === 0) {
            row = [null, null, null, null];
        } else if (row.length === 1) {
            row =
                direction === "left"
                    ? [row[0], null, null, null]
                    : [null, null, null, row[0]];
        } else {
            if (direction === "left") {
                for (let i = 0; i < row.length - 1; i++) {
                    let j = i + 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j < row.length - 1) {
                            row[j] = row[j + 1];
                            j++;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.push(null);
                }
            } else if (direction === "right") {
                for (let i = row.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j > 0) {
                            row[j] = row[j - 1];
                            j--;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.unshift(null);
                }
            }
        }
        return row;
    };
    const rowThree = (direction) => {
        let row = [tileEight, tileNine, tileTen, tileEleven].filter(
            (e) => e !== null
        );
        if (row.length === 0) {
            row = [null, null, null, null];
        } else if (row.length === 1) {
            row =
                direction === "left"
                    ? [row[0], null, null, null]
                    : [null, null, null, row[0]];
        } else {
            if (direction === "left") {
                for (let i = 0; i < row.length - 1; i++) {
                    let j = i + 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j < row.length - 1) {
                            row[j] = row[j + 1];
                            j++;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.push(null);
                }
            } else if (direction === "right") {
                for (let i = row.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j > 0) {
                            row[j] = row[j - 1];
                            j--;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.unshift(null);
                }
            }
        }
        return row;
    };
    const rowFour = (direction) => {
        let row = [tileTwelve, tileThirteen, tileFourteen, tileFifteen].filter(
            (e) => e !== null
        );
        if (row.length === 0) {
            row = [null, null, null, null];
        } else if (row.length === 1) {
            row =
                direction === "left"
                    ? [row[0], null, null, null]
                    : [null, null, null, row[0]];
        } else {
            if (direction === "left") {
                for (let i = 0; i < row.length - 1; i++) {
                    let j = i + 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j < row.length - 1) {
                            row[j] = row[j + 1];
                            j++;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.push(null);
                }
            } else if (direction === "right") {
                for (let i = row.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (row[i] === row[j]) {
                        row[i] += 1;
                        while (j > 0) {
                            row[j] = row[j - 1];
                            j--;
                        }
                        row[j] = null;
                    }
                }
                while (row.length < 4) {
                    row.unshift(null);
                }
            }
        }
        return row;
    };
    const colOne = (direction) => {
        let col = [tileZero, tileFour, tileEight, tileTwelve].filter(
            (e) => e !== null
        );
        if (col.length === 0) {
            col = [null, null, null, null];
        } else if (col.length === 1) {
            col =
                direction === "up"
                    ? [col[0], null, null, null]
                    : [null, null, null, col[0]];
        } else {
            if (direction === "up") {
                for (let i = 0; i < col.length - 1; i++) {
                    let j = i + 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j < col.length - 1) {
                            col[j] = col[j + 1];
                            j++;
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.push(null);
                }
            } else if (direction === "down") {
                for (let i = col.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j > 0) {
                            col[j] = col[j - 1];
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.unshift(null);
                }
            }
        }
        return col;
    };
    const colTwo = (direction) => {
        let col = [tileOne, tileFive, tileNine, tileThirteen].filter(
            (e) => e !== null
        );
        if (col.length === 0) {
            col = [null, null, null, null];
        } else if (col.length === 1) {
            col =
                direction === "up"
                    ? [col[0], null, null, null]
                    : [null, null, null, col[0]];
        } else {
            if (direction === "up") {
                for (let i = 0; i < col.length - 1; i++) {
                    let j = i + 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j < col.length - 1) {
                            col[j] = col[j + 1];
                            j++;
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.push(null);
                }
            } else if (direction === "down") {
                for (let i = col.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j > 0) {
                            col[j] = col[j - 1];
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.unshift(null);
                }
            }
        }
        return col;
    };
    const colThree = (direction) => {
        let col = [tileTwo, tileSix, tileTen, tileFourteen].filter(
            (e) => e !== null
        );
        if (col.length === 0) {
            col = [null, null, null, null];
        } else if (col.length === 1) {
            col =
                direction === "up"
                    ? [col[0], null, null, null]
                    : [null, null, null, col[0]];
        } else {
            if (direction === "up") {
                for (let i = 0; i < col.length - 1; i++) {
                    let j = i + 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j < col.length - 1) {
                            col[j] = col[j + 1];
                            j++;
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.push(null);
                }
            } else if (direction === "down") {
                for (let i = col.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j > 0) {
                            col[j] = col[j - 1];
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.unshift(null);
                }
            }
        }
        return col;
    };
    const colFour = (direction) => {
        let col = [tileThree, tileSeven, tileEleven, tileFifteen].filter(
            (e) => e !== null
        );
        if (col.length === 0) {
            col = [null, null, null, null];
        } else if (col.length === 1) {
            col =
                direction === "up"
                    ? [col[0], null, null, null]
                    : [null, null, null, col[0]];
        } else {
            if (direction === "up") {
                for (let i = 0; i < col.length - 1; i++) {
                    let j = i + 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j < col.length - 1) {
                            col[j] = col[j + 1];
                            j++;
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.push(null);
                }
            } else if (direction === "down") {
                for (let i = col.length - 1; i > 0; i--) {
                    let j = i - 1;
                    if (col[i] === col[j]) {
                        col[i] += 1;
                        while (j > 0) {
                            col[j] = col[j - 1];
                        }
                        col[j] = null;
                    }
                }
                while (col.length < 4) {
                    col.unshift(null);
                }
            }
        }
        return col;
    };

    const left = () => {
        let a = rowOne("left");
        let b = rowTwo("left");
        let c = rowThree("left");
        let d = rowFour("left");
        setTileZero(a[0]);
        setTileOne(a[1]);
        setTileTwo(a[2]);
        setTileThree(a[3]);
        setTileFour(b[0]);
        setTileFive(b[1]);
        setTileSix(b[2]);
        setTileSeven(b[3]);
        setTileEight(c[0]);
        setTileNine(c[1]);
        setTileTen(c[2]);
        setTileEleven(c[3]);
        setTileTwelve(d[0]);
        setTileThirteen(d[1]);
        setTileFourteen(d[2]);
        setTileFifteen(d[3]);
    };
    const right = () => {
        let a = rowOne("right");
        let b = rowTwo("right");
        let c = rowThree("right");
        let d = rowFour("right");
        setTileZero(a[0]);
        setTileOne(a[1]);
        setTileTwo(a[2]);
        setTileThree(a[3]);
        setTileFour(b[0]);
        setTileFive(b[1]);
        setTileSix(b[2]);
        setTileSeven(b[3]);
        setTileEight(c[0]);
        setTileNine(c[1]);
        setTileTen(c[2]);
        setTileEleven(c[3]);
        setTileTwelve(d[0]);
        setTileThirteen(d[1]);
        setTileFourteen(d[2]);
        setTileFifteen(d[3]);
    };
    const up = () => {
        let a = colOne("up");
        let b = colTwo("up");
        let c = colThree("up");
        let d = colFour("up");
        setTileZero(a[0]);
        setTileFour(a[1]);
        setTileEight(a[2]);
        setTileTwelve(a[3]);
        setTileOne(b[0]);
        setTileFive(b[1]);
        setTileNine(b[2]);
        setTileThirteen(b[3]);
        setTileTwo(c[0]);
        setTileSix(c[1]);
        setTileTen(c[2]);
        setTileFourteen(c[3]);
        setTileThree(d[0]);
        setTileSeven(d[1]);
        setTileEleven(d[2]);
        setTileFifteen(d[3]);
    };
    const down = () => {
        let a = colOne("down");
        let b = colTwo("down");
        let c = colThree("down");
        let d = colFour("down");
        setTileZero(a[0]);
        setTileFour(a[1]);
        setTileEight(a[2]);
        setTileTwelve(a[3]);
        setTileOne(b[0]);
        setTileFive(b[1]);
        setTileNine(b[2]);
        setTileThirteen(b[3]);
        setTileTwo(c[0]);
        setTileSix(c[1]);
        setTileTen(c[2]);
        setTileFourteen(c[3]);
        setTileThree(d[0]);
        setTileSeven(d[1]);
        setTileEleven(d[2]);
        setTileFifteen(d[3]);
    };

    return (
        <GameBoard>
            <Tile value={tileZero} />
            <Tile value={tileOne} />
            <Tile value={tileTwo} />
            <Tile value={tileThree} />
            <Tile value={tileFour} />
            <Tile value={tileFive} />
            <Tile value={tileSix} />
            <Tile value={tileSeven} />
            <Tile value={tileEight} />
            <Tile value={tileNine} />
            <Tile value={tileTen} />
            <Tile value={tileEleven} />
            <Tile value={tileTwelve} />
            <Tile value={tileThirteen} />
            <Tile value={tileFourteen} />
            <Tile value={tileFifteen} />
            <button onClick={left} value="left">
                left
            </button>
            <button onClick={right} value="right">
                right
            </button>
            <button onClick={up} value="up">
                up
            </button>
            <button onClick={down} value="down">
                down
            </button>
        </GameBoard>
    );
};
