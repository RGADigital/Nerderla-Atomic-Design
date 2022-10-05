import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles);
const TYPES = [
  'account',
  'calendar',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clock',
  'close',
  'expand',
  'gallery',
  'home',
  'menu',
  'minus',
  'movie',
  'pause',
  'play',
  'search',
  'settings',
  'star-fill',
  'star-stroke',
  'tv',
]
const Icon = ({ type }) => {
  console.log('type: ', type)
  return (
    <span  className={cx('icon', type)}/>
  );
};

Icon.defaultProps = {
  type: 'account',
};

Icon.propTypes = {
  type: PropTypes.oneOf(TYPES),
};
export default Icon;
