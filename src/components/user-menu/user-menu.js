import React, {Component} from "react";

import './user-menu.css';
import avatar from './user-avatar.png';


export default class userMenu extends Component {
  state = {
    show: false
  }

  menuToggle = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  render() {

    const { show } = this.state;
    let arrowClass = 'user-menu__arrow';
    let dropdownClass = 'user__dropdown';

    if (show) {
      arrowClass += " user-menu__arrow--rotate";
      dropdownClass += " user__dropdown--show";
    }

    return (
      <div className="user-menu">
        <div className="user-menu__view" onClick={this.menuToggle}>
          <img src={avatar} alt="avatar" className="user-menu__avatar"/>
          <span className={arrowClass}></span>
        </div>
        <div className={dropdownClass}>
          <ul className="user-menu-list">
            <li className="user-menu-list__item">
              logIn
            </li>
            <li className="user-menu-list__item">
              logOut
            </li>
          </ul>
        </div>
      </div>
    )
  }
}