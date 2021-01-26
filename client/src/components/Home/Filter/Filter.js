import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { getLevels, getClasses, getNations, getTanks } from '../../../redux/reducers/HomeReducer';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TankSelect from './TankSelect/TankSelect';

const Filter = (props) => {
    const { levels, classes, nations, getLevels, getClasses, getNations, getTanks } = props;

    useEffect(() => {
        getLevels();
        getClasses();
        getNations();
    }, []);

    const [sLevel, setLevel] = useState(0);
    const [sClass, setClass] = useState(0);
    const [sNation, setNation] = useState(0);

    const handleLevels = (event) => {
        setLevel(event.target.value);

        const qLevel = event.target.value === 0 ? undefined : event.target.value;
        const qClass = sClass === 0 ? undefined : sClass;
        const qNation = sNation === 0 ? undefined : sNation;

        getTanks(qLevel, qClass, qNation);
    };

    const handleClasses = (event) => {
        setClass(event.target.value);

        const qLevel = sLevel === 0 ? undefined : sLevel;
        const qClass = event.target.value === 0 ? undefined : event.target.value;
        const qNation = sNation === 0 ? undefined : sNation;

        getTanks(qLevel, qClass, qNation);
    };

    const handleNations = (event) => {
        setNation(event.target.value);

        const qLevel = sLevel === 0 ? undefined : sLevel;
        const qClass = sClass === 0 ? undefined : sClass;
        const qNation = event.target.value === 0 ? undefined : event.target.value;

        getTanks(qLevel, qClass, qNation);
    };

    return (
        <section className={styles.container}>
            <Paper variant='outlined' className={styles.inner}>
                <Typography gutterBottom variant='h5' component='h2' className={styles.title}>
                    Filter
                </Typography>

                <div className={styles.formInner}>
                    <TankSelect label='level' value={sLevel} handleChange={handleLevels} items={levels} />
                    <TankSelect label='class' value={sClass} handleChange={handleClasses} items={classes} />
                    <TankSelect label='nation' value={sNation} handleChange={handleNations} items={nations} />
                </div>
            </Paper>
        </section>
    );
};

const mapStateToProps = (state) => ({
    levels: state.home.levels,
    classes: state.home.classes,
    nations: state.home.nations
});

export default connect(mapStateToProps, { getLevels, getClasses, getNations, getTanks })(Filter);
