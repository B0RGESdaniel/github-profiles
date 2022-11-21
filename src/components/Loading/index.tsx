import { Container } from './styles';
import { FiLoader } from 'react-icons/fi'

export const Loading = () => {
  return (
    <Container>
      <h1>Loading</h1>
      <FiLoader size={40}/>
    </Container>
  );
};
