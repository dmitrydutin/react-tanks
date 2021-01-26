import styles from './TankInfo.module.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTank } from '../../redux/reducers/TankInfoReducer';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TankInfo = (props) => {
    const { tankInfo, getTank } = props;

    useEffect(() => {
        getTank(props.match.params.id);
    }, []);

    return (
        <main>
            <Container>
                {tankInfo[0] ? (
                    <section className={styles.container}>
                        <Paper variant='outlined' className={styles.shortInfo}>
                            <Typography variant='h4' component='h1' className={styles.title}>
                                {tankInfo[0].name}
                            </Typography>
                            <img src={tankInfo[0].photo} alt='Tank' className={styles.tankImage} />
                        </Paper>

                        <Paper variant='outlined' className={styles.fullInfo}>
                            <Typography variant='h4' component='h1' className={styles.title}>
                                Характеристики
                            </Typography>

                            <ul className={styles.list}>
                                <li>Нация: {tankInfo[0].nation}</li>
                                <li>Класс: {tankInfo[0].class}</li>
                                <li>Уровень: {tankInfo[0].level}</li>
                                <li>Прочность: {tankInfo[0].strength} единиц</li>
                                <li>Броня: {tankInfo[0].armor} мм</li>
                                <li>Урон: {tankInfo[0].damage} единиц</li>
                                <li>Разброс: {tankInfo[0].scatter}м на 10км</li>
                            </ul>
                        </Paper>

                        <Paper variant='outlined' className={styles.videoContainer}>
                            <iframe
                                title={tankInfo[0].id}
                                src={tankInfo[0].video}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            ></iframe>
                        </Paper>
                    </section>
                ) : (
                    <section className={styles.container}>
                        <Paper variant='outlined' className={styles.inner}>
                            <Typography variant='h4' component='h1' className={styles.alignCenter}>
                                Tank not found
                            </Typography>
                        </Paper>
                    </section>
                )}
            </Container>
        </main>
    );
};

const mapStateToProps = (state) => ({
    tankInfo: state.tankInfo.tank
});

export default connect(mapStateToProps, { getTank })(TankInfo);
