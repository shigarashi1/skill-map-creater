import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import styles from './Header.module.scss';

import { Nullable } from '../../../types';
import { Logger } from '../../../models';

type TProps = {
  username: string;
  sidebar: {
    show: () => void;
    close: () => void;
  };
  common: {
    signOut: () => void;
  };
  isStatic?: boolean;
};

const Header: React.FC<TProps> = ({ username, sidebar, common, isStatic }) => {
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
    // TODO: ログアウト確認してから
    common.signOut();
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
          <Button onClick={onOpenMenu} color="inherit">
            <Typography className={styles.username} variant="subtitle2" color="inherit">
              {username}
            </Typography>
            <Icon>account_circle</Icon>
          </Button>
        </Toolbar>
      </AppBar>
      <Menu id="icon-menu" anchorEl={anchorEl} keepMounted={true} open={Boolean(anchorEl)} onClose={onCloseMenu}>
        <MenuItem onClick={onClickUserSetting}>User Setting</MenuItem>
        <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Header;
