import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("white");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-red"
                    label="Red"
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-orange"
                    label="Orange"
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-yellow"
                    label="Yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-green"
                    label="Green"
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-blue"
                    label="Blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-purple"
                    label="Purple"
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-black"
                    label="Black"
                    value="black"
                    checked={color === "black"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="emotion-check-white"
                    label="White"
                    value="white"
                    checked={color === "white"}
                />
                <div>
                    <span>You have chosen </span>
                    <span
                        style={{ backgroundColor: color }}
                        data-testId="colored-box"
                    >
                        {color}
                    </span>
                </div>
            </div>
        </div>
    );
}
