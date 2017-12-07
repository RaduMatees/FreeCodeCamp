/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first
argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function checkCashRegister(price, cash, cid) {
  var change = (cash - price)*100;
  var drawer = [];
  // creates identical list to loop parrallel
  var values = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]
  ];

  // creates reversed cid list
  var result = [];
  for (i=cid.length-1; i>=0; i--){
    cid[i][1] = cid[i][1] * 100;
    drawer.push(cid[i]);
  }

  // counts all the money in the cash drawer
  var allCash = 0;
  for (j=0; j<drawer.length; j++){
    allCash += drawer[j][1];
  }

  if (allCash === change) {return "Closed";}

  // loops from big $ to small $
  for (i=0; i<drawer.length; i++){
    var temp = [drawer[i][0], 0];
    while (change >= values[i][1] && drawer[i][1] - values[i][1] >= 0){
      drawer[i][1] -= values[i][1]; // takes money from cash drawer
      change -= values[i][1]; // decerements change
      temp[1] += values[i][1]; // increments the list that will be printed
    }
    if (temp[1] > 0){
      temp[1] = temp[1] / 100;
      result.push(temp);
    }
  }
  // if change is 0 then all the change has been given back to the customer
  // if something remains, then there wasn't enough money in the cas drawer
  if (change !== 0) {return "Insufficient Funds";}
  return result;
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);   // should return an array
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);   // should return a string
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);   // should return a string
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);   // [["QUARTER", 0.50]]
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);   // [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);   // "Insufficient Funds"
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);   // "Insufficient Funds"
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);   // "Closed"
