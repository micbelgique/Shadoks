var baseApiUrl = "http://www.godofweb.eu/dev/back";
var baseJsonUrl = "/api";


var jsonUrls = {
  user : `${baseJsonUrl}/user.json`,
  rooms : `${baseJsonUrl}/rooms.json`
};

var apiUrls = {
  user : `${baseApiUrl}/user.json`,
  rooms : `${baseApiUrl}/rooms.json`
}; 

export default {
  urls : jsonUrls
};
