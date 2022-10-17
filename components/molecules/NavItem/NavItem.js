import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';
import Icon, {ICON_TYPES} from '../../atoms/Icon';
import Image from 'next/image';

const cx = classNames.bind(styles);

const NavItem = ({ href, icon, image, className }) => (
  <a className={cx('nav-item', className)} href={href}>
    {icon && (
      <Icon type={icon}/>
    )}
    {image && (
      <Image src={image} alt='' />
    )}
  </a>
);

NavItem.defaultProps = {
  href: '',
  icon: '',
  image: '',
  className: '',
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.oneOf(ICON_TYPES),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
};
export default NavItem;
