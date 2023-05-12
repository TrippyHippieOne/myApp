import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef ((props) => {
    return (
        <div>
            <input className={classes.myInput} {...props} ></input>

        </div>
    );
});

export default MyInput;