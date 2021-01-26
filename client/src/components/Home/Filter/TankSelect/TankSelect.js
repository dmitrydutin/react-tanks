import styles from './TankSelect.module.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const TankSelect = (props) => {
    const { label, value, handleChange, items } = props;

    return (
        <FormControl variant='outlined' className={styles.formControl}>
            <InputLabel id={`${label}-label`}>{label}</InputLabel>

            <Select
                labelId={`${label}-label`}
                id={`${label}-select`}
                value={value}
                onChange={handleChange}
                label={label}
            >
                <MenuItem value={0}>
                    <em>None</em>
                </MenuItem>

                {items.map((item) => (
                    <MenuItem key={item.id} value={item.id}>{item.value}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default TankSelect;
