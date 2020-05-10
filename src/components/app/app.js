import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {BacklogCard, FinishedCard, InProgressCard, ReadyCard} from '../kanban-components';
import TasksList from "../tasks-list";
import Header from "../header";
import Footer from "../footer";

import LocalStorageService from "../../services/localStorageService";



import "./app.css";

export default class App extends Component {
  lsService = new LocalStorageService();

  state = {
    backlog: [],
    ready: [],
    inProgress: [],
    finished: []
  }

  componentDidMount() {
    const backlog = this.lsService.getBacklog();
    const ready = this.lsService.getReady();
    const inProgress = this.lsService.getInProgress();
    const finished = this.lsService.getFinished();

    this.setState({
      backlog,
      ready,
      inProgress,
      finished
    })
  }

  addBacklog = (title) => {
    this.lsService.addBacklog(title);
    const backlog = this.lsService.getBacklog();

    this.setState({
      backlog
    })
  }

  addReady = (id) => {
    this.lsService.updateTasksById(id, 'ready');
    const ready = this.lsService.getReady();
    const backlog = this.lsService.getBacklog();

    this.setState({
      ready,
      backlog
    })
  }

  addInProgress = (id) => {
    this.lsService.updateTasksById(id, 'in_progress');
    const ready = this.lsService.getReady();
    const inProgress = this.lsService.getInProgress();

    this.setState({
      ready,
      inProgress
    })
  }

  addFinished = (id) => {
    this.lsService.updateTasksById(id, 'finished');
    const finished = this.lsService.getFinished();
    const inProgress = this.lsService.getInProgress();

    this.setState({
      inProgress,
      finished
    })
  }

  render() {
    const { backlog, inProgress, ready, finished } = this.state;
    return (
      <div className="app">
        <Router>
          <Header/>
          <div className="board">
            <Route path="/" exact>
                <BacklogCard addTask={this.addBacklog} items={backlog} />
                <ReadyCard addTask={this.addReady} items={ready} selectItems={backlog}/>
                <InProgressCard addTask={this.addInProgress} items={inProgress} selectItems={ready}/>
                <FinishedCard addTask={this.addFinished} items={finished} selectItems={inProgress}/>
            </Route>
            <Route path="/:type"
              render={ ({match}) => {
                const { type } = match.params;
                return <TasksList type={type}/>;
              }}
            />
          </div>
          <Footer active={backlog.length} finished={finished.length} name="Vadim" />
        </Router>

      </div>
    )
  }
}