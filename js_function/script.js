function squareNumber(){
  var num=document.getElementById('square-input').value
  console.log('The result of squaring the number '+num+' is '+num**2)
  document.getElementById('solution').innerHTML = num**2
}

function halfNumber(){
  var num=document.getElementById('half-input').value
  console.log('Half of '+num+' is '+num/2)
  document.getElementById('solution').innerHTML = num/2
}

function percentOf(){
  var num1=document.getElementById('percent1-input').value
  var num2=document.getElementById('percent2-input').value
  var percent = (num1/num2)*100 + '%'
  console.log(num1+' is '+percent+' of '+num2)
  document.getElementById('solution').innerHTML = percent
}

function areaOfCircle(){
  var radius=document.getElementById('area-input').value
  var area=(radius**2)*Math.PI
  var area=area.toFixed(2)
  console.log('The area for a circle with radius '+radius+' is '+area)
  document.getElementById('solution').innerHTML = area
}
