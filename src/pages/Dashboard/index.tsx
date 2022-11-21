import { useFetchUsersList } from '../../services/requests/useFetchUsersList';

import { Card } from '../../components/Card';
import { Loading } from '../../components/Loading';

import { Container } from './styles';

export function Dashboard() {
  const { data, isFetching } = useFetchUsersList();

  if (isFetching) return <Loading />;

  return (
    <Container>
      {data?.map(user => (
        <Card key={user.id} userInfo={user} />
      ))}
    </Container>
  );
}
