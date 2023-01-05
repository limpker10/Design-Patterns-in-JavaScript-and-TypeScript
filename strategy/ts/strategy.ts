interface Strategy {
  login(user:string, password: string) : boolean;
}
class loginContext {
  constructor(
    private strategy:Strategy
  ){ this.strategy = strategy }

  setStrategy(strategy:Strategy){
    this.strategy = strategy
  }
  
  login(user:string,password:string):boolean{
    return this.strategy.login(user,password)
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if(user === 'admin' && password === "entra"){
      console.log("Success ...")
      return true
    }
    return false
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if(user === 'admin' && password === "entra"){
      console.log("Nos dirigimos a un servicio de autentificacion")
      return true
    }
    return false
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if(user === 'admin' && password === "entra"){
      console.log("Nos dirigimos a un servicio de autentificacion en Google")
      return true
    }
    return false
  }
}

const auth = new loginContext(new LoginDBStrategy())
auth.login("admin","entra");
auth.setStrategy(new LoginServiceStrategy())
auth.login("admin","entra");
auth.setStrategy(new LoginGoogleStrategy())
auth.login("admin","entra");
