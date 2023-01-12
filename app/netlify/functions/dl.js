const ytdl = require("ytdl-core");


function select_thumbnail( thumbnails ){
  let url = '';
  let elem = thumbnails.length;

  return thumbnails[elem - 1].url;
}


function select_videos( formats ){
  var videos = [];

  formats.forEach(format => {
    if( format.hasAudio && format.hasVideo ){
      videos.push( {'label': format.height + 'p', 'url': format.url} );
    }
  });

  return videos;
}

exports.handler = async function (event, context) {
    const vid = event.queryStringParameters.url || 'Rp9-LAksZwU';
    const base_url = 'https://www.youtube.com/embed/';
    const origin = 'https://' + event.headers.host;
    console.log( process.env );
    console.log( event )

    if( process.env.NODE_ENV === 'development' ){
      origin = '*'
    }

    var responseData = {
        title: '',
        description: '',
        thumbnail: '',
        videos: []
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
        //responseData.videos.push( select_videos( videoInfo.formats ) );
        //console.log( select_videos( videoInfo.formats ) );
        responseData.videos = select_videos( videoInfo.formats );
    }

    return {
        statusCode: 200,
        headers: {
          "access-control-allow-origin": origin,
        },
        body: JSON.stringify({ responseData }),
      };
}