import React, {Component} from "react";

import './user-menu.css';
import avatar from './user-avatar.png';


export default class userMenu extends Component {
  state = {
    show: false,
    login: true
  }

  menuToggle = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  render() {

    const { show, login } = this.state;
    let arrowClass = 'user-menu__arrow';
    let dropdownClass = 'user__dropdown';
    let listItems = null;

    if (show) {
      arrowClass += " user-menu__arrow--rotate";
      dropdownClass += " user__dropdown--show";
    }

    if (login) {
      listItems = (
        <>
          <li className="user-menu-list__item">
            Profile
          </li>
          <li className="user-menu-list__item">
            Settings
          </li>
          <li className="user-menu-list__item">
            Logout
          </li>
        </>
      )
    } else {
      listItems = (
        <>
          <li className="user-menu-list__item">
            Login
          </li>
          <li className="user-menu-list__item">
            Register
          </li>
        </>
      )
    }

    return (
      <div className="user-menu">
        <div className="user-menu__view" onClick={this.menuToggle}>
          <img src={avatar} alt="avatar" className="user-menu__avatar"/>
          <span className={arrowClass}></span>
        </div>
        <div className={dropdownClass}>
          <ul className="user-menu-list">
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
}