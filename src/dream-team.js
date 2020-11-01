const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)) return false
  let result =[]
  for (let index = 0; index < members.length; index++) {

    if(typeof members[index] === 'string' ){

      let a=members[index].trim()
      if(a!=""){
        result.push(a.trim()[0].toLowerCase())
      }
  
  
      
    }
  }
  
  return result.sort(sor).join("").toUpperCase()
};




  function sor(a,b){
    if(a< b) { return -1; }
    if(a> b) { return 1; }
    return 0;
  }
