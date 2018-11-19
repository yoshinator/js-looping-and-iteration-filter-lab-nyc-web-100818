// Code your solution in this file
function findMatching(collection, name) {
  let newArray = collection.filter(
    function (key){
      return key.toLowerCase() === name.toLowerCase();
  });
  return newArray;
}



function fuzzyMatch(collection, letters) {
  let newArray = collection.filter(
    function (key){
      return key.slice(0,2) === letters
    });
    return newArray;
};


function matchName(collection, name){
  let newArray = collection.filter(
    function (key){
      if (name === key.name){
        return key
      }
  });
  return newArray;
}
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; })
