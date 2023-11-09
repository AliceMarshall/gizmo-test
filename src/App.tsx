import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    padding: 4em;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
`;

const App = () => {
    return (
        <Wrapper>
            <Title>Hello World</Title>
        </Wrapper>
    );
};

export default App;
