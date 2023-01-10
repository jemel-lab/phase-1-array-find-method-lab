// code your solution here
function superbowlWin (record) {
   const win = record.find((rec) => rec.result ==='W');
   if (win != null) { 
    return win.year
    
   } else {
    return undefined
    
   }
}
     