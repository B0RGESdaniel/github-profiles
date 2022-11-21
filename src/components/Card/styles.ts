import styled from 'styled-components'

interface StatProps {
    info?: 'followers' | 'following' | 'repos'
}

export const Container = styled.div`
    max-width: 21.5rem;
    max-height: 450px;
    border: 1px solid var(--gray-500);
    border-radius: 1rem;
    gap: 1.5rem;
    margin: 2rem;
    padding: 2rem 1rem 2rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: 2px 2px 8px rgba(0, 0, 0, .8);

    span {
        color: var(--gray-300);
    }
`;

export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: .25rem;

        a {
            text-decoration: none;
            color: var(--gray-300);
            font-size: 1rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    img {
        border-radius: 10rem;
        width: 140px;
        height: 140px;
        border: 2px solid var(--gray-200);

        &:hover {
            border-color: var(--green-500);
        }
    }
`;

export const UserStats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    padding: 1rem 0.5rem;
    border-top: 1px solid var(--gray-500);
`;

export const StatInfo = styled.div<StatProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h3 {
        font-size: 1.5rem;
        color: ${props => {
            if (props.info === 'followers') return 'var(--purple)'
            if (props.info === 'following') return 'var(--blue)'
            if (props.info === 'repos') return 'var(--green-500)'
        }}
    }
`;

export const Bio = styled.p`
    align-self: center;
    font-size: .9rem;
`;