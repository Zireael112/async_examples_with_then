export default class Team {
  constructor(persons) {
    this.persons = [...persons];
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.persons;

    return {
      next() {
        return {
          value: data[++index],
          done: !(index in data),
        };
      },
    };
  }
}
