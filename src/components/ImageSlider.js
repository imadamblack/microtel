import React, { useState, useEffect, useRef } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length, interval]);

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex((prev) => Math.min(prev, images.length - 1));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images.length]);

  const goToPrevious = () => {
    resetTimeout();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    resetTimeout();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='h-[45vh]'>
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img src={image.src} alt={image.alt} className={styles.slideImage} />
              {image.caption && <p className={styles.slideCaption}>{image.caption}</p>}
            </div>
          ))}
        </div>

        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
              onClick={() => {
                resetTimeout();
                setCurrentIndex(index);
              }}
            ></div>
          ))}
        </div>

        <button className={styles.prevButton} onClick={goToPrevious}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={goToNext}>
          &#10095;
        </button>
        <div className={styles.indexText}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;