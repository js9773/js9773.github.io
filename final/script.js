function openPage(){
  var saladHead= document.getElementById("saladHead");
  var vortex= document.getElementById("vortex");
  saladHead.style.display='none';
  vortex.style.display='none';
  document.body.style.cssText='background:#29472C';
  var title= document.getElementById('title');
  title.style.display='block';
  var info = document.getElementById("info");
  info.style.display='block';
}

function moveTitle(){
  title.style.display='none';
  info.style.display='none';
  var interact= document.getElementById("interact");
  interact.style.display='block';
  var interact2= document.getElementById("hat");
  interact2.style.display='inline-block';
  var hellopic= document.getElementById("hellopic");
  hellopic.style.display='inline';
  var menu= document.getElementById("menu");
  menu.style.display='block';
}

$(function(){
  $('#interact').draggable();
  $('#hat').draggable();
  $('#hulbertc').draggable();
  $( "#link" ).toggle( "bounce", { times: 120 }, "slow" );
})

function changeText(){
  var text= document.getElementsByTagName('p')[1];
  text.innerHTML="oops,you missed the link";
  text.style.left='-185px';
}

setTimeout(changeText,3400);
