import axios from "axios";
import { useEffect, useState } from "react";

import { User } from "../../pages/Dashboard";

import { Container, Avatar, Bio, UserStats, StatInfo } from './styles'

interface UserCardProps {
    userInfo: User;
}

const emptyUser = {
    name: '',
    login: '',
    id: 1,
    avatar_url: '',
    html_url: '',
    starred_url: '',
    bio: '',
    public_repos: 0,
    followers: 0,
    following: 0,
}

export function Card({ userInfo }: UserCardProps) {
    const [user, setUser] = useState<User>(emptyUser)

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
