import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface doubleHalfState {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}

function Doubler(dhState: doubleHalfState): JSX.Element {
    return (
        <Button onClick={() => dhState.setDhValue(2 * dhState.dhValue)}>
            Double
        </Button>
    );
}

function Halver(dhState: doubleHalfState): JSX.Element {
    return (
        <Button onClick={() => dhState.setDhValue(0.5 * dhState.dhValue)}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
