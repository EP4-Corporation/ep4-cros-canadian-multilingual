var altgr = false;
var map = [];
var down = [];
var keycodes = [];
keycodes[222] = '|';
keycodes[55] = '{';
keycodes[56] = '}';
keycodes[57] = '[';
keycodes[48] = ']';
keycodes[219] = '`';
keycodes[186] = '°';
keycodes[188] = '<';
keycodes[190] = '>';
keycodes[221] = '~';
keycodes[187] = '¬';

document.addEventListener('keydown', function(e) {
  
  // Test
  // console.log(keycodes[e.which]);
  
  if(!map[e.keyCode]){
      down.push(e.keyCode);
      if((down[0] === 18 && keycodes[down[1]]) || (e.ctrlKey && e.altKey && keycodes[e.which])) {
          var text = keycodes[e.which];
          document.execCommand("insertHTML", false, text);
          e.preventDefault();
          if(down[0] === 18){ altgr = true }
      }
  }
  map[e.keyCode] = true;
  
  document.addEventListener('keyup', function(f) {
      map[e.keyCode] = false;
      if(f.which === 18){
        altgr = false;
        down.length = 0;
      }
      if(altgr === true && f.which != 18){
        down.length = 1;
      } else {
        altgr = false;
        down.length = 0;
      }
  });
    
});