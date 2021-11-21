      import throttle from 'lodash.throttle';
import Player from '@vimeo/player'
const iframe = document.querySelector('iframe');
      const player = new Player(iframe);
     
      const STORAGE_KEY = "videoplayer-current-time"
 
      const onPlay = function(data) {

            let timeSec = data.seconds
    

            localStorage.setItem(STORAGE_KEY, timeSec)
     

      };

function setTime() {
                   const savedData = localStorage.getItem(STORAGE_KEY)
            
            if (savedData) {
       
                  player.setCurrentTime(savedData)
            }
      }

player.on('timeupdate', throttle(onPlay, 1000));
setTime()
 
// window.addEventListener('DOMContentLoaded', setTime)
 
 