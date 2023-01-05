class Subject {
  constructor(){
    this.observers = [];
  }
  subcribe(observer){
    this.observers.push(observer);
  }
  unsubscribe(observer){
    this.observers = this.observers.filter(obs => obs !== observer)
  }
  notify(data){
    this.observers.forEach(element => {
      element.refresh(data)
    });
  }
}

class Observer {
  constructor(fn){
    this.fn = fn;
  }
  refresh(data){
    this.fn(data);
  }
}

const s = new Subject();
const o1 = new Observer(d=>{console.log("Hola soy el observador 1" + d)});
const o2 = new Observer(d=>{
  div1.innerHTML = d ;
});
const o3 = new Observer(d=>{
  div2.innerHTML = d.split("").reverse().join("");
});


s.subcribe(o1);
s.subcribe(o2);
s.subcribe(o3);

function change(){
  s.notify(myText.value)
}