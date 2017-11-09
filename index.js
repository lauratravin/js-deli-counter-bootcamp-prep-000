var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
   var position =  katzDeliLine.length;
     katzDeliLine.push(name);  //I add new person to line
     if (position< 7){
     return `Welcome, ${name}. You are number ${position + 1} in line.`;
    }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  var served = katzDeliLine[0];
  katzDeliLine.shifts();
  return  `Currently serving ${served}.`;
  } else {
     return 'There is nobody waiting to be served!';

  }
}
