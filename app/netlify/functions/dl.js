const ytdl = require("ytdl-core");

exports.handler = async function (event, context) {
    const vid = event.queryStringParameters.url || 'Rp9-LAksZwU';
    const url = 'https://www.youtube.com/embed/';

    var responseData = {
        title: '',
        description: '',
        thumbnail: '',
        uris: []
      };

    if( vid != ''){
        try {
            console.log('dl.js');
            var videoInfo = await ytdl.getInfo( url + vid );
        } catch(e) {
            console.log(e);
        }

        responseData.title = videoInfo.videoDetails.title;
        responseData.description = videoInfo.videoDetails.description;
        responseData.thumbnail = videoInfo.videoDetails.thumbnails[4].url;
    }

    return {
        statusCode: 200,
        headers: {
          "access-control-allow-origin": "*",
        },
        body: JSON.stringify({ responseData }),
      };
}