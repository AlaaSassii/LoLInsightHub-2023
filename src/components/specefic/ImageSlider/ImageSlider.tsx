import { FC, useState } from "react"
import './ImageSlider.scss'
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
type ImageSliderProps = {
    images: string[]
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    return (
        <section
            aria-label="Image Slider"
            style={{ width: "100%", height: "100%", position: "relative" }}
        >
            <a href="#after-image-slider-controls" className="skip-link">
                Skip Image Slider Controls
            </a>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    overflow: "hidden",
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        aria-hidden={imageIndex !== index}
                        className="img-slider-img"
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button
                onClick={showPrevImage}
                className="img-slider-btn"
                style={{ left: 0 }}
                aria-label="View Previous Image"
            >
                <p><AiFillCaretLeft /></p>
            </button>
            <button
                onClick={showNextImage}
                className="img-slider-btn"
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <p><AiFillCaretRight /></p>
            </button>
            <div
                style={{
                    position: "absolute",
                    bottom: ".5rem",
                    left: "50%",
                    translate: "-50%",
                    display: "flex",
                    gap: ".25rem",
                }}
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="img-slider-dot-btn"
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <p><BiRadioCircleMarked /></p>
                        ) : (
                            <p><BiRadioCircle /></p>
                        )}
                    </button>
                ))}
            </div>
            <div id="after-image-slider-controls" />
        </section>
    )
}

export default ImageSlider