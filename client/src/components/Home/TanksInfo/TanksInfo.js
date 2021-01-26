import styles from './TanksInfo.module.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTanks } from '../../../redux/reducers/HomeReducer';
import Paper from '@material-ui/core/Paper';
import TankCard from './TankCard/TankCard';

const TanksInfo = (props) => {
    const { tanks, getTanks } = props;

    useEffect(() => {
        getTanks();
    }, []);

    return (
        <section className={styles.container}>
            <Paper variant='outlined' className={styles.inner}>
                {tanks.map((tank) => (
                    <TankCard
                        key={tank.id}
                        tankLink={`/tanks/${tank.id}`}
                        tankName={tank.name}
                        tankLevel={tank.level}
                        tankNation={tank.nation}
                        tankClass={tank.class}
                    />
                ))}
            </Paper>
        </section>
    );
};

const mapStateToProps = (state) => ({
    tanks: state.home.tanks
});

export default connect(mapStateToProps, { getTanks })(TanksInfo);
