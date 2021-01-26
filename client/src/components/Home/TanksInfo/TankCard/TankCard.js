import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 220
    },
    media: {
        height: 300
    }
});

const TankCard = (props) => {
    const classes = useStyles();
    const { tankLink, tankName, tankLevel, tankNation, tankClass } = props;

    return (
        <Card className={classes.root} variant='outlined'>
            <CardActionArea component={RouterLink} to={tankLink}>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {tankName}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Уровень: {tankLevel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Нация: {tankNation}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Класс: {tankClass}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default TankCard;
