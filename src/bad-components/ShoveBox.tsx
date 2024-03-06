import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface boxShoveProps {
    position: number;
    setPosition: (newPosition: number) => void;
}

/*
function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
*/

function ShoveBoxButton({ position, setPosition }: boxShoveProps): JSX.Element {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox(props: boxShoveProps): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: props.position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(0);

    const box = MoveableBox({ position, setPosition });

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
