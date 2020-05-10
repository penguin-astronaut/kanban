export default class LocalStorageService {
  getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
  }

  updateTasks = (tasks) => {
    tasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasks);
  }

  getBacklog = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    return  tasks.filter(({type}) => type === 'backlog')
  }

  getReady = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    return tasks.filter(({type}) => type === 'ready')
  }

  getInProgress = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    return  tasks.filter(({type}) => type === 'in_progress')
  }

  getFinished = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    return  tasks.filter(({type}) => type === 'finished')
  }

  filterByType = (type) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    return tasks.filter(item => item.type === type)
  }

  addBacklog = (title) => {
    const task = {
      id: this._getId(),
      date: this._getDate(),
      title,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Quam nemo umquam voluptatem appellavit, appellat; Ubi ut eam caperet aut quando?',
      type: 'backlog'
    }

    let tasks = [...this.getTasks(), task];
    this.updateTasks(tasks);
  }

  updateTasksById = (id, newType) => {
    let tasks = this.getTasks();
    const taskIndex = tasks.findIndex(item => item.id === +id)
    tasks[taskIndex].type = newType;
    this.updateTasks(tasks);
  }

  _getId() {
    let currentId = localStorage.getItem('task_id');
    if (!currentId) {
      currentId = 1;
    } else {
      currentId++;
    }
    localStorage.setItem('task_id', currentId.toString());

    return currentId;
  }

  _getDate() {
    const now = new Date();
    const minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
    return`${now.getHours()}:${minutes} ${now.getDate()}.${month}.${now.getFullYear()}`
  }
}