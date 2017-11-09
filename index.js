var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
   var position =  katzDeliLine.length;
     katzDeliLine.push(name);  //I add new person to line
     return `Welcome, ${name}. You are number ${position + 1} in line.`;

}
