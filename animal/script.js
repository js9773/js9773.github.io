var img = document.getElementsByTagName('img')[0];
img.style.left='0px';

var bubble = document.getElementsByTagName('p')[0];
bubble.style.left='200px';
bubble.style.top='300px';

function catSay(){
  var say=document.getElementById('say').value
  document.getElementById('bubble').innerHTML = say
  bubble.display.block
}

var moustache = document.getElementsByTagName('img')[1];
moustache.style.position='absolute';
moustache.style.right='50px';
moustache.style.width='15%';

moustache.onmousedown = function(event) {

document.body.append(moustache);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
    moustache.style.left = pageX - moustache.offsetWidth / 2 + 'px';
    moustache.style.top = pageY - moustache.offsetHeight / 2 + 'px';
  }

function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

document.addEventListener('mousemove', onMouseMove);

moustache.onmouseup = function() {
   document.removeEventListener('mousemove', onMouseMove);
   moustache.onmouseup = null;
 };

};

moustache.ondragstart = function() {
  return false;
};
