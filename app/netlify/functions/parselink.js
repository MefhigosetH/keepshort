exports.handler = async function (event, context) {

  var responseData = {
    title: '',
    description: '',
    thumbnail: ''
  };

  return {
    statusCode: 200,
    headers: {
      "access-control-allow-origin": "*",
    },
    body: JSON.stringify({ responseData }),
  };
};