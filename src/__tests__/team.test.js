import Team from '../js/sym_iter';

test('iteration of team', () => {
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
  const squad = new Team(characters);
  let current = -1;
  for (const character of squad) {
    current += 1;
    expect(character).toBe(characters[current]);
  }
});
