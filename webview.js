'use strict';

const _path = require("path");

module.exports = (Franz) => {

  const getMessages = function getMessages() {
    // Make a request for the message count, maybe this should be delayed more.
    fetch('https://www.instagram.com/direct_v2/web/get_badge_count/?no_raven=1')
    .then(response => response.json()).then(badges => Franz.setBadge(badges.badge_count));
  };
  
  Franz.loop(getMessages);

  // Attach listener for "enter" key to send instead of newline.
  document.addEventListener('keydown', function(event) {
    try {
        if (event.keyCode == 13 && !event.shiftKey) {
          var buttons = document.getElementsByTagName('button');
          for(var i=0;i<buttons.length;i++){
            if(buttons[i].innerHTML == 'Send'){
              buttons[i].click();
              event.preventDefault();
              break;
            }
          }
        }
        false;
    } catch (e) { };
    return true;
  });
  
  Franz.injectCSS(_path.join(__dirname, 'style.css'));
};
