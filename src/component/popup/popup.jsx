import React from 'react';
import classes from './popup.module.scss';

const Popup = ({ image, onClose }) => {

    return (
        <div className={classes.popup} onClick={onClose}>
            <div className={classes.image_wrapper}>
                <img src={image.download_url} alt='...' />
                <div className={classes.title}>{image.author}</div>
            </div>
        </div>
    )
};

export default Popup;