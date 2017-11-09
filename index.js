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
  katzDeliLine.shift();
  return  `Currently serving ${served}.`;
  } else {
     return 'There is nobody waiting to be served!';

  }
}


function currentLine(line){
    var text;
    if (line.length>0){
        for(var i = 0; i < line.length; i++){

           text = text + (i+1) + '. ' + line[i] + ', ';

        }

        return 'The line is currently: ${text}';
    } else {
       return `The line is currently empty.`;

    }
}
