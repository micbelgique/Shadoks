var baseApiUrl = "http://www.godofweb.eu/dev/back";
var baseJsonUrl = "/api";


var jsonUrls = {
  user : `${baseJsonUrl}/user.json`,
  rooms : `${baseJsonUrl}/rooms.json`
};

var apiUrls = {
  user : `${baseJsonUrl}/user.json`,
  rooms : `${baseApiUrl}/rooms/getall`
}; 

export default {
  urls : apiUrls
};
