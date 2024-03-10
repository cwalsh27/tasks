import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");
    const attemptsParsed = parseInt(attemptsRequested) || 0;

    function Adder(): JSX.Element {
        return (
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft + attemptsParsed)}
            >
                Gain
            </Button>
        );
    }

    function Subber(): JSX.Element {
        return (
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft < 1}
            >
                Use
            </Button>
        );
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <div>Attempts Left: {attemptsLeft}</div>
            <Adder></Adder>
            <Subber></Subber>
        </div>
    );
}
