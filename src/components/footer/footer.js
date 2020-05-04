import React from "react";

import "./footer.css";

function Footer(props) {
  const {finished, active, name} = props;
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__info">
          Active tasks: {active}
        </div>
        <div className="footer__info">
          Finished tasks: {finished}
        </div>
      </div>
      <div className="footer__left">
        <div className="footer__info">
          Kanban board by {name} , {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer;