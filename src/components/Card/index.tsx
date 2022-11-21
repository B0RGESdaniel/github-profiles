import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";

import { Container, Avatar, Bio, UserStats, StatInfo } from './styles'

interface UserCardProps {
    userInfo: IUser;
}

export function Card({ userInfo }: UserCardProps) {
    const [user, setUser] = useState<IUser | undefined>(undefined)

    async function getUser() {
        try {
            const response = await axios.get(`https://api.github.com/users/${userInfo?.login}`)
            setUser(response.data);
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getUser()
    }, [])

    if(!user) return <></>;

    return (
        <Container>
            <Avatar>
                <img src={user.avatar_url} alt="" />
                <div>
                    <h2>{user.name ?? '-'}</h2>
                    <a href={user.html_url} target="_blank">{user.login}</a>
                </div>
            </Avatar>
            <Bio>{user.bio}</Bio>
            <UserStats>
                <StatInfo info="followers">
                    <h3>{user.followers ?? 0}</h3>
                    <span>Followers</span>
                </StatInfo>
                <StatInfo info="following">
                    <h3>{user.following ?? 0}</h3>
                    <span>Following</span>
                </StatInfo>
                <StatInfo info="repos">
                    <h3>{user.public_repos ?? 0}</h3>
                    <span>Repos</span>
                </StatInfo>
            </UserStats>
        </Container>
    )
}
