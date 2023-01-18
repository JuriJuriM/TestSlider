// class Observer
class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  emmit(action) {
    this.observers.forEach(observer => {
      observer.onEmmit(action);
    });
  }
}
