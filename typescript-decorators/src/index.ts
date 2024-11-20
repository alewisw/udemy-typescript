type ProgrammingLanguage =
  | "Typescript"
  | "Java"
  | "C++"
  | "Python";

@constructorLogger('hello', 'world')
class Developer {
  private name: string;
  private language: ProgrammingLanguage;

  constructor(name: string, language: ProgrammingLanguage) {
    this.name = name;
    this.language = language;
  }
  getInfo() {
    console.log(
      `${this.name} is coding using ${this.language}`
    );
  }
  @methodLogger
  getName() {
    return this.name;
  }

  @methodLogger
  getSomeVacations(days: number, location: string): number {
    console.log(`Going ${days} days to ${location}`);
    return days;
  }
}
const codiku = new Developer("Codiku", "Typescript");
codiku.getInfo();
const days = codiku.getSomeVacations(15, "Miami");
codiku.getName();

// Class decorator
function constructorLogger(title: string, magic: string) {
  return function constructorLogger_(constructor: Function)
  {
    console.log(
      `This is the constructor with ${title} and ${magic} `,
      constructor.toString()
    );
  }
}

// Method logger
function methodLogger(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const method = descriptor.value;

  descriptor.value = (...args: any[]) => {
    console.log("params", args);
    const result = method.apply(this, args);
    console.log(
      "Calling",
      methodName,
      " with args :  ",
      args,
      " the result is ",
      result
    );
    return result;
  };
  return descriptor;
}