import { User } from '../../types/User';
import { useFetchUserDetails } from '../../services/requests/useFetchUserDetails';

import { Container, Avatar, Bio, UserStats, StatInfo } from './styles';

interface UserCardProps {
  userInfo: User;
}

export function Card({ userInfo }: UserCardProps) {
  const { data: userDetails, isFetching } = useFetchUserDetails(userInfo?.login);

  if (isFetching) return <></>;

  return (
    <Container>

      <Avatar>

        <img src={userDetails?.avatar_url} alt="" />

        <div>
          <h2>{userDetails?.name ?? '-'}</h2>
          <a href={userDetails?.html_url} target="_blank">
            {userDetails?.login}
          </a>
        </div>

      </Avatar>

      <Bio>{userDetails?.bio}</Bio>

      <UserStats>

        <StatInfo info="followers">
          <h3>{userDetails?.followers ?? 0}</h3>
          <span>Followers</span>
        </StatInfo>

        <StatInfo info="following">
          <h3>{userDetails?.following ?? 0}</h3>
          <span>Following</span>
        </StatInfo>
        
        <StatInfo info="repos">
          <h3>{userDetails?.public_repos ?? 0}</h3>
          <span>Repos</span>
        </StatInfo>

      </UserStats>
    </Container>
  );
}
