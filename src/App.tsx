import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import lion from "./lion.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
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
        </div>
    );
}

export default App;
