import styles from './Statistics.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withLogoutRedirect } from '../../hoc/withAuthRedirect';
import { getAdminLevels, getAdminClasses, getAdminNations } from '../../redux/reducers/AdminReducer';
import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Bar } from 'react-chartjs-2';

const Statistics = (props) => {
    const { classes, levels, nations, getAdminLevels, getAdminClasses, getAdminNations } = props;

    useEffect(() => {
        getAdminLevels();
        getAdminClasses();
        getAdminNations();
    }, []);

    const state1 = {
        labels: ['ЛТ', 'СТ', 'ТТ', 'ПТ-САУ'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: classes.map((item) => item.count)
            }
        ]
    };

    const state2 = {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: levels.map((item) => item.count)
            }
        ]
    };

    const state3 = {
        labels: [
            'США',
            'СССР',
            'Германия',
            'Великобритания',
            'Япония',
            'Китай',
            'Франция',
            'Сборная Европы',
            'Сборная нация'
        ],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: nations.map((item) => item.count)
            }
        ]
    };

    return (
        <main>
            <Container>
                <section className={styles.container}>
                    <Paper variant='outlined' className={styles.inner}>
                        <Bar
                            data={state1}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Количество техники разных видов',
                                    fontSize: 20
                                },
                                legend: {
                                    display: false,
                                    position: 'right'
                                }
                            }}
                        />
                    </Paper>
                </section>

                <section className={styles.container}>
                    <Paper variant='outlined' className={styles.inner}>
                        <Bar
                            data={state2}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Количество техники разных уровней',
                                    fontSize: 20
                                },
                                legend: {
                                    display: false,
                                    position: 'right'
                                }
                            }}
                        />
                    </Paper>
                </section>

                <section className={styles.container}>
                    <Paper variant='outlined' className={styles.inner}>
                        <Bar
                            data={state3}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Количество техники разных наций',
                                    fontSize: 20
                                },
                                legend: {
                                    display: false,
                                    position: 'right'
                                }
                            }}
                        />
                    </Paper>
                </section>
            </Container>
        </main>
    );
};

const mapStateToProps = (state) => ({
    levels: state.admin.levels,
    classes: state.admin.classes,
    nations: state.admin.nations
});

export default compose(
    connect(mapStateToProps, { getAdminLevels, getAdminClasses, getAdminNations }),
    withLogoutRedirect
)(Statistics);
