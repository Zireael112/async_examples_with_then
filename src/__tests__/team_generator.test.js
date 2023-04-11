import TeamGenerator from '../js/sym_gen';

test('iteration of generators team', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const char2 = {
    name: 'Doom',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const char3 = {
    name: 'Мечник',
    type: 'Swordman',
    health: 70,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const characters = [char, char2, char3];
  const squad = new TeamGenerator(characters);
  let current = -1;
  for (const character of squad) {
    current++;
    expect(character).toBe(characters[current]);
  }
});
