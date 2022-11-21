import { DiGithubBadge } from 'react-icons/di';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <DiGithubBadge size={40} />
        <h2>Github Profiles</h2>
      </Content>
    </Container>
  );
}
