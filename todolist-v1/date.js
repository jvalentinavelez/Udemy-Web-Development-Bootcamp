
//module.exports.getDate = getDate;

//refactor
exports.getDate = function(){

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  //let day = today.toLocaleDateString("es-CO",options); //Colombia's format
  return today.toLocaleDateString("en-EN",options);

}


//In case there's another function
module.exports.getDay = getDay;

function getDay(){

  let today = new Date();

  let options = {
    weekday: "long",
  };

  //let day = today.toLocaleDateString("es-CO",options); //Colombia's format
  return today.toLocaleDateString("en-EN",options);

}
