import Player from '@vimeo/player';

// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

//

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  }, 1000)
);

if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}
