import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import lion from "./lion.jpeg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>This is my header message</h1>
            <p>
                Hello World ! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Now my name is Coleman Walsh
            </p>
            <Container>
                <Row>
                    <Col>
                        <p>This is text</p>
                    </Col>
                    <Col>
                        <img src={lion} alt="LionImage" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="redRect"></div>
                    </Col>
                    <Col>
                        <div className="redRect"></div>
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
