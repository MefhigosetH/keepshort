const cheerio = require("cheerio");

exports.handler = async function (event, context) {
  const linkUrl = "https://www.youtube.com/shorts/1Mpac46BTrA";

  var responseData = {
    title: '',
    description: '',
    thumbnail: ''
  };

  try {
    const response = await fetch( linkUrl );
    const body = await response.text();

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