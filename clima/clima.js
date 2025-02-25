const axios = require('axios');



const getClima = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9914d33da9225cc757941cba872cc365&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}