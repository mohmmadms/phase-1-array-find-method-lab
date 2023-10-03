// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2015", result: "L"},
    {year: "2016", result: "N/A"},
    {year: "2015", result: "W"}
    //...
  ]
  function superbowlWin(myArray){
    const winningYearObj = myArray.find(superbowl => superbowl.result === "W");
    
    if (winningYearObj){
    return winningYearObj.year}
    else{
        return undefined;
    }

  }
  