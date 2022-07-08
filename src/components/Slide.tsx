import React, { useState } from 'react'
import styled from 'styled-components';

const Slide = ({data}) => {
    return (
        <Container>
            <PosterWrapper>
                <PosterImage src="" alt="title" />
            </PosterWrapper>
        </Container>
    )
};

export default Slide;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    background-color: gray;
`;

const PosterWrapper = styled.div`
    width: 100%;
    max-width: 250px;
    border: 1px solid blue;
`;

const PosterImage = styled.img`
    width: 100%;
`;