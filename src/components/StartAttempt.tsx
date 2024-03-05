import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptNum, setAttemptNum] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttemptNum(attemptNum - 1);
        setInProgress(true);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function addredo(): void {
        setAttemptNum(attemptNum + 1);
    }

    return (
        <div>
            <div>
                <span>Attempts: {attemptNum} </span>
                <span>In Progress: {inProgress}</span>
            </div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || attemptNum === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addredo} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
