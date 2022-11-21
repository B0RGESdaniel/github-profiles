import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';

import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
