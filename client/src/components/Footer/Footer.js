import styles from './Footer.module.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Typography gutterBottom variant='subtitle1' component='h3' className={styles.title}>
                    Сайт создал Дутин Дмитрий Андреевич
                </Typography>

                <Typography gutterBottom variant='body2' component='p' className={styles.title}>
                    Сайт создан для курсового проекта «ИНФОРМАЦИОННО-СПРАВОЧНАЯ СИСТЕМА «ПУТЕВОДИТЕЛЬ ПО ИГРЕ «WORLD OF
                    TANKS BLITZ»»»
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
