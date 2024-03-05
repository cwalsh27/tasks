import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎂" | "☘️" | "🧨" | "🦃" | "🎄";

const yearTransitions: Record<Holiday, Holiday> = {
    "☘️": "🧨",
    "🧨": "🎂",
    "🎂": "🦃",
    "🦃": "🎄",
    "🎄": "☘️"
};

const alphaTransitions: Record<Holiday, Holiday> = {
    "🎂": "🎄",
    "🎄": "🧨",
    "🧨": "☘️",
    "☘️": "🦃",
    "🦃": "🎂"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎂");

    function cycleAlpha(): void {
        const newHoliday = alphaTransitions[holiday];
        setHoliday(newHoliday);
    }

    function cycleYear(): void {
        const newHoliday = yearTransitions[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={cycleAlpha}>Cycle by Alphabet</Button>
            <Button onClick={cycleYear}>Cycle by Year</Button>
        </div>
    );
}
