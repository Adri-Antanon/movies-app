import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';

import NavbarOption from './components/navbarOption/NavbarOption';

import classes from './header.module.scss';

import Logo from '../shared/logo/Logo';

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/series' || pathname === '/movies') {
      setShowOptions(true);
      return;
    }

    setShowOptions(false);
  }, [pathname]);

  return (
    <header className={classes.header}>
      <nav className={classes.header__logos}>
        <Link href="/" passHref>
          <Logo className={classes['header__logos--logo']} />
        </Link>
        {showOptions && (
          <>
            <NavbarOption
              navigate={'/movies'}
              src={'assets/icon-movies.png'}
              alt={'movies section'}
              title={'Movies'}
            />
            <NavbarOption
              navigate={'/series'}
              src={'assets/icon-series.png'}
              alt={'series section'}
              title={'Series'}
            />
          </>
        )}
      </nav>
      <aside className={classes.header__options}>
        {showOptions && (
          <NavbarOption
            className={classes['header__options--filter']}
            src={'assets/icon-filter.png'}
            alt={'filter option'}
            title={'Filter'}
          />
        )}
        <NavbarOption
          className={classes['header__options--login']}
          src={'assets/icon-login.png'}
          alt={'login option'}
          title={'Login'}
          hasRightIcon
        />
        <button>Start your free trial</button>
      </aside>
    </header>
  );
};

export default Header;
