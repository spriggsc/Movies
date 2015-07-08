var movies = [
	'fury',
 	'annie',
  	'bambie',
  	'cinderella',
  	'barbie',
  	'lego',
  	'home',
  	'sense8',
  	'starwars',
  	'movie'
 ];
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

for (var i = 0; i < movieArr.length; i++) {
  var capitalizedName = capitalize(movieArr[i]);
  console.log(capitalizedName);
}




//function capitalize(str) {
//   if (!str || typof str !== 'string') {
//       return "";
//    }
//
//   return str[0].toUpperCase() + str.slice(1);
//}

//function capitalize(str){
 // return str[0].toUpperCase() + string.slice(1);
//}