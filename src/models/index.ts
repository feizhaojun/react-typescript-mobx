import { observable, action } from "mobx";

// interface ICheckStuff {
//   id: string;
//   index: number;
// }

class store {
  @observable test1 = "TEST1";
  private test2 = 'TEST2';
  public test3 = 'TEST3';

  @action
  test4 = () => {}

  @action.bound
  test5 = () => {}
}

export default new store();
