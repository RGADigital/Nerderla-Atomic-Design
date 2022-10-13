import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SubTitle.module.scss";

const cx = classNames.bind(styles);

const SubTitle = ({ children }) => (
  <div className={cx("container")}>{children}</div>
);

SubTitle.defaultProps = {
  children: "",
};

SubTitle.propTypes = {
  children: PropTypes.string,
};
export default SubTitle;
