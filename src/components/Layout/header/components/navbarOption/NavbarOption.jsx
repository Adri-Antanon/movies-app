import PropTypes from 'prop-types';
import { NavLink } from '../../../../Shared/NavLink';

import classes from './navbarOptions.module.scss';

const NavbarOption = ({
  navigate,
  src,
  alt,
  className,
  title,
  hasRightIcon = false,
}) => {
  return (
    <>
      {navigate ? (
        <NavLink
          href={navigate}
          className={(navData) =>
            navData.isActive ? classes.active : classes.navlink
          }
        >
          {!hasRightIcon && (
            <img className={classes.icon} src={src} alt={alt} />
          )}
          <h3>{title}</h3>
        </NavLink>
      ) : (
        <div className={className}>
          {!hasRightIcon && (
            <img className={classes.icon} src={src} alt={alt} />
          )}
          <h3>{title}</h3>
          {hasRightIcon && <img className={classes.icon} src={src} alt={alt} />}
        </div>
      )}
    </>
  );
};

export default NavbarOption;

NavbarOption.propTypes = {
  navigate: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  hasRightIcon: PropTypes.bool,
};
