import React from 'react';
import classnames from 'classnames';

const MenuTabs = props => {
  const menu = props.data || [];
  return (
    <React.Fragment>
      {menu &&
        menu.map(item => (
          <li
            className={classnames('list-inline-item', {
              active: props.activeTab === item.key
            })}
            key={item.key}
            onClick={() => {
              props.toggle(item.key);
            }}
          >
            {item.name}
          </li>
        ))}
    </React.Fragment>
  );
};

export default MenuTabs;
