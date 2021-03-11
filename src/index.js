module.exports = function check(str, bracketsConfig) {
  let buffer = str;
  let iteration
       for(let i = 0;i<bracketsConfig.length; i++){ 
       let vs=bracketsConfig[i].join('')
      iteration = buffer.replace(vs,"")
      buffer = iteration 
   }
  return (buffer==='')? true:
         (buffer===str)? false:
         check(buffer, bracketsConfig);
  }