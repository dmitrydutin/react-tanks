import styles from './GameInfo.module.css';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        },
        '&$expanded': {
            margin: 'auto'
        }
    },
    expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56
        }
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        }
    },
    expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiAccordionDetails);

const GameInfo = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <section className={styles.container}>
            <Paper variant='outlined' className={styles.inner}>
                <Typography variant='h4' component='h1' className={styles.title}>
                    World of Tanks Blitz
                </Typography>

                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Об игре</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            World of Tanks Blitz (сокр. WoT Blitz) — массовая многопользовательская онлайн-игра для
                            смартфонов, планшетов на базе платформ iOS и Android, а также для компьютеров на платформах
                            Windows 7, 8.0, 8.1, 10 и Mac OS, в том числе игра доступна для скачивания в игровом
                            магазине Steam и также доступна на Nintendo Switch. Разработчиками данной игры является
                            белорусская компания Wargaming.net. Как World of Tanks и многие другие проекты компании,
                            игра выдержана в стиле Второй мировой войны, но есть также танки, которые не существовали в
                            реальном мире. Концепция World of Tanks Blitz базируется на массовых командных танковых
                            сражениях в режиме встречного боя с единственной базой для обеих команд. Международный релиз
                            игры для устройств на базе платформы iOS состоялся 26 июня 2014 года, Android-версия игры
                            вышла 4 декабря 2014 года, затем 16 Декабря 2015 года игра стала доступна на Windows 10, 9
                            марта 2016 года игра появилась на платформе Mac OS в странах СНГ и острова Кипр, после чего
                            24 марта игра стала доступна всем обладателям Mac OS в мире, 9 ноября 2016 года появилась в
                            игровом магазине Steam, а 26 августа 2020 года на Nintendo Switch.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Игровой процесс</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Игровой процесс в World of Tanks Blitz основывается на битве двух случайно подобранных
                            команд по 7 игроков в каждой, при этом в одной команде могут сочетаться танки разных наций,
                            классов (кроме артиллерии) и годов выпуска. Условие победы в битве — за 7 минут уничтожить
                            команду противника либо захватить нейтральную базу, для чего один или несколько танков
                            должны находиться в отмеченной зоне некоторое время, не получая при этом повреждений (чем
                            больше стоит танков, тем быстрее происходит захват). Также есть режим боя «Превосходство», в
                            котором команда побеждает в случае, если она уничтожит всю технику противника или наберёт
                            1000 очков победы. Очки победы можно зарабатывать, захватывая точки и уничтожая технику
                            противника. Существует возможность формировать взводы по 2 человека и объединяться в кланы.
                            Многие механики взяты из PC-версии, например, физика повреждения. Механика PC-версии также
                            ощутима во время перемещения по бугристой местности. Так, например, при скоростной езде на
                            подвижных танках можно сделать дрифт. Игроки могут использовать единый аккаунт Wargaming.net
                            для игры в World of Tanks Blitz, но не могут использовать контент, достигнутый в World of
                            Tanks на PC.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </section>
    );
};

export default GameInfo;
