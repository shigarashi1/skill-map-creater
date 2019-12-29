import React, { useState } from 'react';

import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import styles from './Header.module.scss';

import { Nullable, EPath } from '../../../types';
import { Logger } from '../../../models';
import { THeaderProps } from '../../../containers/components/Header';
import LanguageSelect from '../../../containers/components/LanguageSelect';

type TProps = THeaderProps & {
  isStatic?: boolean;
};

const Header: React.FC<TProps> = ({ hasSignedIn, username, sidebar, auth, router, isStatic, infoDialog }) => {
  const [anchorEl, setAnchorEl] = useState<Nullable<HTMLElement>>(null);

  const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  const onOpen = () => {
    sidebar.show();
  };

  const onSignOut = () => {
    infoDialog.show({
      title: 'ログアウト確認',
      context: 'ログアウトします。よろしいですか？',
      close: () => {},
      ok: () => {
        auth.signOut();
      },
    });
  };

  const onToLoginPage = () => {
    router.push(EPath.SignIn);
  };

  const onClickUserSetting = () => {
    // TODO: あとで
    Logger.log('not impliments');
  };

  return (
    <React.Fragment>
      <AppBar id={styles.container} position={isStatic ? 'static' : 'fixed'}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={onOpen}>
            <Icon>menu_icon</Icon>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Skill Map Creater
          </Typography>
        </Toolbar>
        <Toolbar className={styles.right}>
          <Hidden xsDown={true}>
            <LanguageSelect />
          </Hidden>
          <Button onClick={onOpenMenu} color="inherit">
            {username ? (
              <Typography className={styles.username} variant="subtitle2" color="inherit">
                {username}
              </Typography>
            ) : null}
            <Icon>account_circle</Icon>
          </Button>
        </Toolbar>
      </AppBar>
      {hasSignedIn ? (
        <Menu
          id="icon-menu-signedIn"
          anchorEl={anchorEl}
          keepMounted={true}
          open={Boolean(anchorEl)}
          onClose={onCloseMenu}
        >
          <MenuItem onClick={onClickUserSetting}>User Setting</MenuItem>
          <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
        </Menu>
      ) : (
        <Menu id="icon-menu" anchorEl={anchorEl} keepMounted={true} open={Boolean(anchorEl)} onClose={onCloseMenu}>
          <MenuItem onClick={onToLoginPage}>Sign In / Up</MenuItem>
        </Menu>
      )}
    </React.Fragment>
  );
};

export default Header;
