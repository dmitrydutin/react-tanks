import styles from './Edit.module.css';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAdminRedirect } from '../../../hoc/withAdminRedirect';
import { getLevels, getClasses, getNations } from '../../../redux/reducers/HomeReducer';
import { getTanksData, editTankData } from '../../../redux/reducers/AdminReducer';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';

const Edit = (props) => {
    const { tanks, levels, classes, nations, getTanksData, getLevels, getClasses, getNations, editTankData } = props;

    useEffect(() => {
        getTanksData();
        getLevels();
        getClasses();
        getNations();
    }, []);

    const initialValues = {
        tankInfo: '',
        nation: '',
        class: '',
        level: '',
        name: '',
        photo: '',
        video: '',
        strength: '',
        armor: '',
        damage: '',
        scatter: ''
    };

    const onSubmit = (values, { setSubmitting }) => {
        editTankData(values, setSubmitting);
    };

    return (
        <main>
            <Container>
                <section className={styles.container}>
                    <Paper variant='outlined' className={styles.inner}>
                        <Typography variant='h6'>Edit tank info</Typography>

                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                            {({ submitForm, isSubmitting }) => (
                                <Form className={styles.form}>
                                    <Field
                                        component={TextField}
                                        name='tankInfo'
                                        label='tankInfo'
                                        select
                                        variant='outlined'
                                        autoComplete='off'
                                    >
                                        {tanks.map((option) => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <Field
                                        component={TextField}
                                        name='nation'
                                        label='nation'
                                        select
                                        variant='outlined'
                                        autoComplete='off'
                                    >
                                        {nations.map((option) => (
                                            <MenuItem key={option.value} value={option.id}>
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <Field
                                        component={TextField}
                                        name='class'
                                        label='class'
                                        select
                                        variant='outlined'
                                        autoComplete='off'
                                    >
                                        {classes.map((option) => (
                                            <MenuItem key={option.value} value={option.id}>
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <Field
                                        component={TextField}
                                        name='level'
                                        label='level'
                                        select
                                        variant='outlined'
                                        autoComplete='off'
                                    >
                                        {levels.map((option) => (
                                            <MenuItem key={option.value} value={option.id}>
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <Field
                                        component={TextField}
                                        name='name'
                                        label='name'
                                        variant='outlined'
                                        autoComplete='off'
                                    />
                                    <Field
                                        component={TextField}
                                        name='photo'
                                        label='photo'
                                        variant='outlined'
                                        autoComplete='off'
                                    />
                                    <Field
                                        component={TextField}
                                        name='video'
                                        label='video'
                                        variant='outlined'
                                        autoComplete='off'
                                    />
                                    <Field
                                        component={TextField}
                                        name='strength'
                                        label='strength'
                                        type='number'
                                        variant='outlined'
                                        autoComplete='off'
                                    />
                                    <Field
                                        component={TextField}
                                        name='armor'
                                        label='armor'
                                        type='number'
                                        variant='outlined'
                                        autoComplete='off'
                                    />
                                    <Field
                                        component={TextField}
                                        name='damage'
                                        label='damage'
                                        type='number'
                                        variant='outlined'
                                        autoComplete='off'
                                    />
                                    <Field
                                        component={TextField}
                                        name='scatter'
                                        label='scatter'
                                        type='number'
                                        variant='outlined'
                                        autoComplete='off'
                                    />

                                    <Button
                                        variant='contained'
                                        color='primary'
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        Edit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </section>
            </Container>
        </main>
    );
};

const mapStateToProps = (state) => ({
    tanks: state.admin.tanks,
    levels: state.home.levels,
    classes: state.home.classes,
    nations: state.home.nations
});

export default compose(
    connect(mapStateToProps, { getTanksData, getLevels, getClasses, getNations, editTankData }),
    withAdminRedirect
)(Edit);
