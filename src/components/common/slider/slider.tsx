import React, { FC, Fragment, useState } from 'react';
import './slider.scss';

interface sliderProps {
    images: string[];
    titles: string[];
}

const Slider: FC<sliderProps> = ({ images, titles }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider">
            <div className="slider-controls">
                {images.map((image, index) => (
                    <Fragment key={index}>
                        <img src={image} width={50} height={50} onClick={() => handleChange(index)} />
                    </Fragment>
                ))}
            </div>
            <ul className="slider-images">
                {images.map((image, index) => (
                    <li
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                        className={index === currentSlide ? 'active' : ''}
                    >
                        <span>{titles[index]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Slider;
