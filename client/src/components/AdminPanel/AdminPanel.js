import styles from './AdminPanel.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAdminRedirect } from '../../hoc/withAdminRedirect';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const AdminPanel = () => {
    return (
        <main>
            <Container>
                <section className={styles.container}>
                    <Paper variant='outlined' className={styles.inner}>
                        <Typography variant='h6'>Admin panel</Typography>

                        <ButtonGroup variant='contained' color='primary'>
                            <Button component={RouterLink} to='/admin/add'>
                                Add
                            </Button>
                            <Button component={RouterLink} to='/admin/edit'>
                                Edit
                            </Button>
                            <Button component={RouterLink} to='/admin/delete'>
                                Delete
                            </Button>
                        </ButtonGroup>
                    </Paper>
                </section>
            </Container>
        </main>
    );
};

export default compose(connect(null), withAdminRedirect)(AdminPanel);
