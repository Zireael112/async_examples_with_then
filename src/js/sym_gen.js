export default class TeamGenerator {
  constructor(persons) {
    this.persons = [...persons];
  }

  * [Symbol.iterator]() {
    let current = 0;
    for (const per of this.persons) {
      yield per;
      current += 1;
    }
  }
}
