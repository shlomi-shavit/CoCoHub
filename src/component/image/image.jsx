import React from 'react';
import LazyLoad from 'react-lazyload';
import classes from './image.module.scss';

const Image = ({ id, url, title, setImageId }) => {

    const Loading = () => {
        return (
            <div className={classes.loader}><div></div><div></div><div></div><div></div></div>
        )
    }

    return (
        <div className={classes.wrapper}>

            <LazyLoad
                height={200}
                offset={[-10, 10]}
                placeholder={<Loading />}>

                <img src={url} alt='...' onClick={() => setImageId(id)} />
                <div className={classes.title}><p>{title}</p></div>
            </LazyLoad>

        </div>
    )
};

export default Image;