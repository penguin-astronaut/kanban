import React, {Component} from "react";

import {BacklogCard, FinishedCard, InProgressCard, ReadyCard} from '../kanban-components';

import LocalStorageService from "../../services/localStorageService";

import Header from "../header";
import Footer from "../footer";

import "./app.css";
import Select from "../select";

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
        <Header/>
        <div className="board">
          <BacklogCard addTask={this.addBacklog} items={backlog} />
          <ReadyCard addTask={this.addReady} items={ready} selectItems={backlog}/>
          <InProgressCard addTask={this.addInProgress} items={inProgress} selectItems={ready}/>
          <FinishedCard addTask={this.addFinished} items={finished} selectItems={inProgress}/>
        </div>
        <Footer active={backlog.length} finished={finished.length} name="Vadim" />
      </div>
    )
  }
}