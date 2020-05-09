import React from "react";
import UserMenu from '../user-menu'

import "./header.css"

function Header() {
  return (
    <header className="header">
      <h1 className="header__name">Kanban Board</h1>
      <div className="header__user">
        <UserMenu />
      </div>
    </header>
  )
}

export default Header;