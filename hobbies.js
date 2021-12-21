function findAllHobbyists(hobby, hobbies) {
    const arrRes = [];
   for(const [key, value] of Object.entries(hobbies)){
      for(let x=0; x<value.length;x++){
         if(value[x] === hobby){
             arrRes.push(key);
         }
      }
   }
    return arrRes;
  }
  
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));