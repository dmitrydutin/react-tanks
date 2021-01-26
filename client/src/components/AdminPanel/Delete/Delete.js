import styles from './Delete.module.css';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAdminRedirect } from '../../../hoc/withAdminRedirect';
import { getTanksData, deleteTankData } from '../../../redux/reducers/AdminReducer';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';

const Delete = (props) => {
    const { tanks, getTanksData, deleteTankData } = props;

    useEffect(() => {
        getTanksData();
    }, []);

    const initialValues = { tankInfo: '' };

    const onSubmit = (values, { setSubmitting }) => {
        deleteTankData(values.tankInfo, setSubmitting);
    };

    return (
        <main>
            <Container>
                <section className={styles.container}>
                    <Paper variant='outlined' className={styles.inner}>
                        <Typography variant='h6'>Delete tank info</Typography>

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

                                    <Button
                                        variant='contained'
                                        color='primary'
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        Delete
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
    tanks: state.admin.tanks
});

export default compose(connect(mapStateToProps, { getTanksData, deleteTankData }), withAdminRedirect)(Delete);
