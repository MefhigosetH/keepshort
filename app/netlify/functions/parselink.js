const cheerio = require("cheerio");
const axios = require("axios");

exports.handler = async function (event, context) {
  const linkUrl = "https://www.youtube.com/shorts/1Mpac46BTrA";

  var responseData = {
    title: '',
    description: '',
    thumbnail: ''
  };

  try {
    const response = await axios.get( linkUrl );
    const body = await response.data;

    const $ = cheerio.load( body );
    responseData.title = $('title').text();
    // title: $('meta[property="og:title"]').attr('content'),
    responseData.description = $('meta[property="og:description"]').attr('content');
    //responseData.thumbnail = $('meta[name="twitter:image"]').attr('content');
    responseData.thumbnail = $('meta[property="og:image"]').attr('content');
  } catch(e) {
    console.log(e);
  }
  
  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*",
    },
    body: JSON.stringify({ responseData }),
  };
};