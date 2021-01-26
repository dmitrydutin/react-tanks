import styles from './Join.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { join } from '../../redux/reducers/AuthReducer';
import { withLoginRedirect } from '../../hoc/withAuthRedirect';
import Container from '@material-ui/core/Container';
import JoinForm from './JoinForm/JoinForm';

const Join = (props) => {
    const { join } = props;

    const initialValues = { login: '', password: '' };

    const onSubmit = (values, { setSubmitting }) => {
        join(values.login, values.password, setSubmitting);
    };

    return (
        <main className={styles.main}>
            <Container maxWidth='xs' className={styles.container}>
                <JoinForm initialValues={initialValues} onSubmit={onSubmit} />
            </Container>
        </main>
    );
};

export default compose(connect(null, { join }), withLoginRedirect)(Join);
