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

update(action) {
  switch (action.type) {
    case 'ADDELEMENT':
      this.state = ++this.state;
      break;

    case 'DELLELEMENT':
      this.state = --this.state;
      break;

    case 'CHANGES':
      this.state += action.payload;
      break;

    default:
      this.state = this.initialState;
  }
}
}

const stream$ = new Subject()

stream$.fire({ type: 'ADDELEMENT' });
stream$.fire({ type: 'DELLELEMENT' });
stream$.fire({ type: 'CHANGES', payload: 10 });

