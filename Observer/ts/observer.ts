interface IObserver <T>{
  refresh(value: T) : void
}

interface ISubject <T>{
  observers : IObserver<T>[];
  subscribe(observer : IObserver<T>) : void;
  unsubscribe(observer : IObserver<T>) : void;
  notify(value : T) : void;
}

class Subject <T> implements ISubject<T> {
  observers : IObserver<T>[];
  constructor(){
    this.observers = []
  }
  subscribe(observer : IObserver<T>){
    this.observers.push(observer)
  }
  unsubscribe(observer : IObserver<T>) {
    this.observers = this.observers.filter(obs => obs!== observer)
  }
  notify(value : T) {
    this.observers.forEach(element => {
      element.refresh(value);
    });
  }
}

class Observer<T> implements IObserver<T>{
  private fn: (value : T) => void

  constructor(fn : (value : T)=> void){
    this.fn = fn;
  }
  refresh(value: T): void {
    this.fn(value)  
  }
}

const subjectNumber = new Subject<number>();
const subjectString = new Subject<string>();
const obs1 = new Observer<number>((n)=>{
  console.log("hola mundo "+n)
});
const obs2 = new Observer<string>((n)=>{
  console.log("hola mundo "+n)
});

subjectNumber.subscribe(obs1)
subjectNumber.notify(1.2);
subjectNumber.notify(30);
subjectString.subscribe(obs2)
subjectString.notify("USANDO OBSERVADOR 2");
