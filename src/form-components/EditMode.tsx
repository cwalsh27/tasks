import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="isEditMode"
                label="Edit Mode"
                checked={mode}
                onChange={updateMode}
            />
            <div>
                {mode ? (
                    <div>
                        <div>
                            <Form.Group controlId="shortAnswer">
                                <Form.Label>Enter Name:</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={updateName}
                                />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="is-student"
                                label="Student"
                                checked={student}
                                onChange={updateStudent}
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <h6>
                            {name} is {student ? "a student" : "not a student"}
                        </h6>
                    </div>
                )}
            </div>
        </div>
    );
}
