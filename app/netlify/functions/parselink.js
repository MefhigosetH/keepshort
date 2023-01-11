const cheerio = require("cheerio");
const axios = require("axios");

exports.handler = async function (event, context) {
  //const linkUrl = "https://www.youtube.com/shorts/1Mpac46BTrA";
  const linkUrl = event.queryStringParameters.url || '';
  console.log('Procesando ' + linkUrl);

  var responseData = {
    title: '',
    description: '',
    thumbnail: ''
  };

  if( linkUrl != ''){
    try {
      const response = await axios.get( linkUrl );
      const body = await response.data;

      const $ = cheerio.load( body );
      responseData.title = $('title').text();
      // title: $('meta[property="og:title"]').attr('content'),
      responseData.description = $('meta[property="og:description"]').attr('content');
      //responseData.thumbnail = $('meta[name="twitter:image"]').attr('content');
      responseData.thumbnail = $('meta[property="og:image"]').attr('content');

      let regex = /\"INNERTUBE_API_KEY\":\"(\w+)\"/;
      let matches = body.match( regex );

      if( matches.length == 2 ){
        console.log( 'INNERTUBE_API_KEY: ' + matches[1] );

        const playerUrl = 'https://www.youtube.com/youtubei/v1/player?key=';
        const playerResponse = await axios.get( playerUrl + matches[1] );
        const playerJson = await playerResponse.JSON();
      }

    } catch(e) {
      console.log(e);
    }
  }

  console.log( responseData );
  
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*",
    },
    body: JSON.stringify({ responseData }),
  };
};