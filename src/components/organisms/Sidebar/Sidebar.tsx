import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Collapse from '@material-ui/core/Collapse';

import styles from './Sidebar.module.scss';

import config from '../../../configuration/config';
import { EPath, TSidebarListItem } from '../../../types';
import { SIDEBAR_LIST } from '../../../lookups';
import { TSidebarProps } from '../../../containers/components/Sidebar';
import { getAuthorization } from '../../../helpers';
import { canShowAuthorization } from '../../../helpers/view/sidebar';

type TProps = TSidebarProps & RouteComponentProps;

const Sidebar: React.FC<TProps> = ({ hasOpened, sidebar, currentPath, history, isLoggedIn, isLoggedInByLink }) => {
  const [openedPath, setOpenedPath] = useState<EPath[]>([]);
  const userAuthorization = getAuthorization(isLoggedIn, isLoggedInByLink);

  const onClose = () => {
    sidebar.close();
  };

  const getClassName = (path: EPath): string => {
    const isActive = currentPath === path;
    return isActive ? styles.listItemActive : styles.listItem;
  };

  const onClickMenu = (path: EPath) => (event: React.MouseEvent<HTMLDivElement>): void => {
    if (currentPath !== path) {
      history.push(path);
    }
  };

  const renderListItem = (item: TSidebarListItem, key: number) => {
    const { text, path, icon, children, canShowDevelopOnly, authorization } = item;
    const hasMatchedPath = openedPath.includes(path);
    const handleClick = () => {
      if (hasMatchedPath) {
        setOpenedPath(openedPath.filter((p) => p !== path));
      } else {
        setOpenedPath([...openedPath, path]);
      }
    };

    const canShowEnv = !!canShowDevelopOnly === config.isDev;
    if (!canShowAuthorization(userAuthorization, authorization) && !canShowEnv) {
      return null;
    }
    return children ? (
      <React.Fragment key={key}>
        <ListItem button={true} onClick={handleClick}>
          {!icon ? null : (
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
          )}
          <ListItemText primary={text} />
          {hasMatchedPath ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
        </ListItem>
        <Collapse in={hasMatchedPath} timeout="auto" unmountOnExit={true}>
          <List component="div" disablePadding={true}>
            {children.map(renderListItem)}
          </List>
        </Collapse>
      </React.Fragment>
    ) : (
      <ListItem button={true} key={key} className={getClassName(path)} onClick={onClickMenu(path)}>
        {!icon ? null : (
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
        )}
        <ListItemText primary={text} />
      </ListItem>
    );
  };

  const renderSidebarContent = () => {
    return (
      <div className={styles.list}>
        <Toolbar>
          <IconButton onClick={onClose}>
            <Icon>chevron_right_icon</Icon>
          </IconButton>
        </Toolbar>
        <div className={styles.listContainer}>
          {SIDEBAR_LIST.map((menuList, index) => {
            return (
              <React.Fragment key={index}>
                <Divider className={styles.padding} />
                <Divider />
                {menuList.map(renderListItem)}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <nav>
      <Hidden implementation="css">
        <Drawer variant="temporary" anchor="right" open={hasOpened} onClose={onClose}>
          {renderSidebarContent()}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default withRouter(Sidebar);
