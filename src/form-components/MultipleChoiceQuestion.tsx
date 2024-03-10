import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currChoice, setCurrChoice] = useState<string>(options[0]);

    function updateCurrChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>How do you feel?</Form.Label>
                    <Form.Select value={currChoice} onChange={updateCurrChoice}>
                        <option value={options[0]}>{options[0]}</option>
                        <option value={options[1]}>{options[1]}</option>
                        <option value={options[2]}>{options[2]}</option>
                    </Form.Select>
                </Form.Group>
                <div>
                    The answer is{" "}
                    {expectedAnswer === currChoice ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                </div>
            </div>
        </div>
    );
}
