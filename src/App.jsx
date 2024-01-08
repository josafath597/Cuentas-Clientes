import { Container } from '@mui/material';
import { Header } from './components/header/Header';
import Routes from './routes';

const App = () => (
    <>
        <Header />
        <Container maxWidth="xl">
            <Routes />
        </Container>
    </>
);

export default App;
