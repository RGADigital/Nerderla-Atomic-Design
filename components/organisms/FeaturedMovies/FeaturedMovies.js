import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import classNames from "classnames/bind";
import styles from "./FeaturedMovies.module.scss";
import { FeaturedMovie } from "../../molecules";

const cx = classNames.bind(styles);

const FeaturedMovies = ({ movies = [] }) => {
  const sliderElement = useRef(null);
  let slider = null;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    slider = new Glide(sliderElement.current, {
      type: "slider",
      perView: 1,
      classes: { activeNav: styles.active },
      rewind: true,
      bound: true,
      focusAt: "center",
    });
    slider.on(["build.after", "run"], () => {
      slider.selector
        .querySelector(".slides")
        .classList.toggle("start", slider.index === 0);
    });
    slider.mount();

    return () => {
      if (slider) slider.destroy();
    };
  }, []);

  const getBullets = () => (
    <div className="nav" data-glide-el="controls[nav]">
      {Array.from({ length: movies.length }, (v, k) => k + 1).map((key) => (
        <button
          type="button"
          key={key}
          className="glide__bullet"
          data-glide-dir={`=${key - 1}`}
          aria-label="button slider"
        />
      ))}
    </div>
  );

  const getArrows = () => (
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        prev
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        next
      </button>
    </div>
  );

  const renderControls = () => (
    <div className={cx("controls")}>{getBullets()}</div>
  );

  return (
    <div className={`glide ${cx("slider")}`} ref={sliderElement}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides slides">
          {movies.map((child, index) => (
            <li key={index} className="glide__slide child" data-index={index}>
              <FeaturedMovie {...child} />
            </li>
          ))}
        </ul>
      </div>
      {renderControls()}
      {getArrows()}
    </div>
  );
};

FeaturedMovies.defaultProps = {
  movies: [],
};

FeaturedMovies.propTypes = {
  movies: PropTypes.array,
};

export default FeaturedMovies;
