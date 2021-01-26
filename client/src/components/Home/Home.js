import Container from '@material-ui/core/Container';
import GameInfo from './GameInfo/GameInfo';
import Filter from './Filter/Filter';
import TanksInfo from './TanksInfo/TanksInfo';

const Home = () => {
    return (
        <main>
            <Container>
                <GameInfo />
                <Filter />
                <TanksInfo />
            </Container>
        </main>
    );
};

export default Home;
