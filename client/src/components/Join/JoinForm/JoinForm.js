import styles from './JoinForm.module.css';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import validate from './validate';

const JoinForm = (props) => {
    const { initialValues, onSubmit } = props;
    
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            {({ submitForm, isSubmitting }) => (
                <Form className={styles.form}>
                    <h1 className={styles.title}>Join</h1>

                    <Field component={TextField} name='login' label='Login' variant='outlined' autoComplete='off' />
                    <Field
                        component={TextField}
                        name='password'
                        type='password'
                        label='Password'
                        variant='outlined'
                        autoComplete='off'
                    />

                    <Button variant='contained' color='primary' disabled={isSubmitting} onClick={submitForm}>
                        Join
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default JoinForm;
