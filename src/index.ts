import { configs } from "./configs";

export interface MyClassProps {
  property: string
}

export interface MyExtraProps {
  extraProperty: string
}

export default class MyClass {
  private property: string;
  public configs = configs

  constructor({
    property,
  }: MyClassProps) {
    this.property = property;
  }

  private getError() {
    return 'error'
  }

  myPublic() {
    const error = this.getError()
    return `${this.property} - ${error}`
  }
}