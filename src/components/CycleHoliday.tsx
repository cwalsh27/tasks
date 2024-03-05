import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "All Saint's Day"
    | "Saint Patrick's Day"
    | "Fourth of July"
    | "Thanksgiving"
    | "Christmas";

const yearTransitions: Record<Holiday, Holiday> = {
    "Saint Patrick's Day": "Fourth of July",
    "Fourth of July": "All Saint's Day",
    "All Saint's Day": "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "Saint Patrick's Day"
};

const alphaTransitions: Record<Holiday, Holiday> = {
    "All Saint's Day": "Christmas",
    Christmas: "Fourth of July",
    "Fourth of July": "Saint Patrick's Day",
    "Saint Patrick's Day": "Thanksgiving",
    Thanksgiving: "All Saint's Day"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("All Saint's Day");
    return <div>Cycle Holiday</div>;
}
