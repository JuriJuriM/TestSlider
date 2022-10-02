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

  update(action) {
    this.observers.forEach(observer => {
      observer.update(action);
    });
  }
}
