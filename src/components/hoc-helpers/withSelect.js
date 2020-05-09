import React, {Component} from "react";
import CardItem from "../card-item";
import CardSelect from "../card-select";

function withSelect(View, title) {
  return class extends Component {
    state = {
      isShowSelect: false,
    }

    showAction = () => {
      this.setState({
        isShowSelect: true
      })
    }

    onActionChangeHandler = (e) => {
      const val = e.target.value;

      if (!val) {
        return;
      }

      this.props.addTask(val);
      this.setState({
        isShowSelect: false
      })
    }

    onActionBlurHandler = (e) => {
      this.setState({
        isShowSelect: false
      })
    }

    render() {
      const { items, selectItems } = this.props;
      const { isShowSelect} = this.state;
      let listContent;

      if (items.length > 0) {
        listContent = items.map(({id, title}) => <CardItem key={id} title={title}/>);
      } else {
        listContent = <span>Tasks not found</span>;
      }

      const taskSelect =
        <CardSelect
          onChange={this.onActionChangeHandler}
          onBlur={this.onActionBlurHandler}>
          {selectItems.map(({id, title}) => <option key={id} value={id}>{title}</option>)}
        </CardSelect>;

      return (
        <View
          actionComponent={taskSelect}
          isShowAction={isShowSelect}
          showAction={this.showAction}
          title={title}>
          { listContent }
        </View>)
    }
  }
}

export default withSelect;