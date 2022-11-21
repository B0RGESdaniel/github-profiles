import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { IUser } from "../../interfaces/IUser";
import { api } from "../../services/api";

import { Container } from "./styles";

export function Dashboard() {
    const [users, setUsers] = useState<IUser[]>([])

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
                <Card key={user.id} userInfo={user}/>
            ))
            }
        </Container>
    )
}