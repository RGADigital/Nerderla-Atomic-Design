import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Button, SubTitle, Lead, Tag, Icon } from "../../atoms";
import styles from "./MovieCard.module.scss";

const cx = classNames.bind(styles);

const MovieCard = ({ title, tag, rate, image }) => (
  <div
    className={cx("container")}
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <Tag label={tag} />
    <div className={cx("rate")}>
      {[...Array(rate).keys()].map((number) => (
        <Icon key={number} type={"star-fill"} />
      ))}
    </div>
    <SubTitle>{title}</SubTitle>
  </div>
);

MovieCard.defaultProps = {
  title: "",
};

MovieCard.propTypes = {
  title: PropTypes.string,
};
export default MovieCard;
