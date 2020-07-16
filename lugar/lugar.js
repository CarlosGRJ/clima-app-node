const axios = require('axios');


const getLugarLatLng = async ( dir ) => {

    const encodedUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'X-RapidAPI-Key': '6c8693e14cmshb58a7a4acf866c0p1b384fjsn444884c57d2a'}
    });

    const resp = await instance.get()

    if( resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}




