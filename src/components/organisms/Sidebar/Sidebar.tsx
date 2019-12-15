import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './Sidebar.module.scss';

import { EPath } from '../../../types';
import { SIDEBAR_LIST } from '../../../lookups';
import { TSidebarProps } from '../../../containers/components/Sidebar';
import { Logger } from '../../../models';

// import { SIDEBAR_LIST } from '../../../lookups/sidebar';

type TProps = RouteComponentProps & TSidebarProps;

const Sidebar: React.FC<TProps> = (props: TProps) => {
  Logger.log('sidebar props', props);
  const { history, hasOpened, currentPath } = props;

  const onClose = () => {
    // props.onTogleSidebar(false);
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

  const renderSidebarContent = () => {
    return (
      <div className={styles.list}>
        <Toolbar>
          <IconButton onClick={onClose}>
            <Icon>chevron_right_icon</Icon>
          </IconButton>
        </Toolbar>
        {SIDEBAR_LIST.map((menuList, index) => {
          return (
            <React.Fragment key={index}>
              <Divider />
              {menuList.map(({ text, path, icon }, i) => (
                <ListItem button={true} key={i} className={getClassName(path)} onClick={onClickMenu(path)}>
                  {!icon ? null : (
                    <ListItemIcon>
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
                  )}
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <nav>
      <Hidden mdUp={true} implementation="css">
        <Drawer variant="temporary" anchor="right" open={hasOpened} onClose={onClose}>
          {renderSidebarContent()}
        </Drawer>
      </Hidden>
      <Hidden mdDown={true} implementation="css">
        <Drawer variant="permanent" open={hasOpened} onClose={onClose}>
          {renderSidebarContent()}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default withRouter(Sidebar);
