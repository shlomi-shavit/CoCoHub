import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './images.module.scss';
import { CSSTransition } from 'react-transition-group';

// Component
import Image from '../image/image';
import Popup from '../popup/popup';

const Images = () => {

    // Fetch data
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://picsum.photos/v2/list',
            );

            setData(result.data);
        };

        fetchData();
    }, []);


    console.log(data);
    //popup handler
    const [showPopup, setShowPopup] = useState(false);

    const [imageIndex, setImageIndex] = useState(null);

    const setImageId = (id) => {
        const imageIdIndex = data.findIndex(img => img.id === id);
        setImageIndex(imageIdIndex);
    }

    // Images DOM
    const images = data.map(image => (
        <li
            key={image.id}
            onClick={() => setShowPopup(true)}>

            <Image
                id={image.id}
                url={image.download_url}
                title={image.author}
                setImageId={(id) => setImageId(id)}
            />
        </li>
    ))

    return (
        <div className={classes.wrapper}>

            <ul>
                {images}
            </ul>

            <CSSTransition
                in={showPopup}
                timeout={100}
                className={classes.popupA}
                unmountOnExit>

                <Popup
                    image={data[imageIndex]}
                    variant="primary"
                    dismissible
                    onClose={() => setShowPopup(false)}
                />

            </CSSTransition>

        </div>
    )
};

export default Images;
