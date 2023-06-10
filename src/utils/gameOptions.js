const GAME_OPTION_GAMEMODE = [
  {
    icon: 'user',
    title: 'Just one seeker',
    description:
      'There is only one finder, once found the players are simply eliminated.',
  },
  {
    icon: 'eye',
    title: 'Hiders become seekers ',
    description: "Once they've been found, they become researchers",
  },
];

const GAME_OPTION_THE_FINDER = [
  {
    icon: 'rotate-right',
    title: 'Random',
    description: 'A player is chosen randomly at the start of the game',
  },
  {
    icon: 'bullhorn',
    title: 'Everyone votes',
    description: 'A player is chosen randomly at the start of the game',
  },
  {
    icon: 'eye-slash',
    title: "It's my decision",
    description:
      "I make my own choices and I don't ask others for their opinion",
  },
];

module.exports = { GAME_OPTION_GAMEMODE, GAME_OPTION_THE_FINDER };
