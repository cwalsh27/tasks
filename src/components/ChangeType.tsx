import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {

    const [qtype, switchType] = useState<QuestionType>("short_answer_question");

    function typeSwitch(): void {
        if (qtype === "multiple_choice_question") {
            switchType("short_answer_question");
        } else {
            switchType("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button onClick={typeSwitch}>Change Type</Button>
        </span>
    );

}
