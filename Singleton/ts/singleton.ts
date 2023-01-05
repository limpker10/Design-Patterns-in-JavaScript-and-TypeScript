class SingletonTS {
  private static instance: SingletonTS;

  private constructor() {}

  public static getInstance(): SingletonTS {
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS();
    }
    return SingletonTS.instance;
  }
}

const instance1 = SingletonTS.getInstance();
const instance2 = SingletonTS.getInstance();
console.log(instance1 === instance2); // true