import styled from "styled-components";
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 1rem;
    width: 100%;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;