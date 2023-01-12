const ytdl = require("ytdl-core");

function select_thumbnail( thumbnails ){
  let url = '';
  let elem = thumbnails.length;

  return thumbnails[elem - 1].url;
}

exports.handler = async function (event, context) {
    const vid = event.queryStringParameters.url || 'Rp9-LAksZwU';
    const base_url = 'https://www.youtube.com/embed/';

    var responseData = {
        title: '',
        description: '',
        thumbnail: '',
        uris: []
      };

    if( vid != ''){
        try {
            console.log('dl.js');
            var videoInfo = await ytdl.getInfo( base_url + vid );
        } catch(e) {
            console.log(e);
        }

        responseData.title = videoInfo.videoDetails.title;
        responseData.description = videoInfo.videoDetails.description ||
                                    '- Sin descripcion -';
        responseData.thumbnail = select_thumbnail( videoInfo.videoDetails.thumbnails );
    }

    return {
        statusCode: 200,
        headers: {
          "access-control-allow-origin": "*",
        },
        body: JSON.stringify({ responseData }),
      };
}