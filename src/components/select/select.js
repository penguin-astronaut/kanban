import React, {Component} from "react";

import './select.css';

export default class Select extends Component {
  state = {
    show: false,
    value: null
  }

  onItemSelected = (e) => {
    const curEl = e.target;
    const {onChange} = this.props;

    if (!curEl.classList.contains('select-list__item')) {
      return;
    }

    onChange(curEl.dataset.value);
  }

  toggleList = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    })
  }

  render() {
    const { show } = this.state;
    const { data, onBlur } = this.props;
    const items = data.map(item => {
      return <li key={item.id} data-value={item.id} className="select-list__item">{item.title}</li>
    });

    let previewClass = "select__preview";
    let listClass = "select-list";

    if (show) {
      previewClass += " select__preview--active";
      listClass += " select-list--show";
    }

    return (
      <div className="select" tabIndex="0" onBlur={onBlur}>
        <div className={previewClass} onClick={this.toggleList}>Select item</div>
        <ul className={listClass} onClick={this.onItemSelected}>
          {items}
        </ul>
      </div>
    )
  }
}