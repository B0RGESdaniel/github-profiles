import { UserCard } from "../components/UserCard";
import { useEffect, useState } from "react";
import styled from "styled-components";

import api from '../services/api'

export interface User {
    name: string;
    login?: string;
    id?: number;
    avatar_url?: string;
    html_url?: string;
    starred_url?: string;
    bio?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
}

export function Dashboard() {
    const [users, setUsers] = useState<User[]>([])

    async function getListUsers() {
        try {
            const response = await api.get('https://api.github.com/users')
            setUsers(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getListUsers()
    }, [])

    return ( 
        <Container>
            { users.map(user => (
                <UserCard key={user.id} userInfo={user}/>
            ))
            }
        </Container>
    )
}

const Container = styled.div`
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