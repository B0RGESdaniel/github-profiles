import styled from 'styled-components'
import { DiGithubBadge } from 'react-icons/di'

export function Header() {
    return (
        <Container>
            <Content>
                <DiGithubBadge size={40} />
                <h2>Github Profiles</h2>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    padding: 1rem 1rem;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;


