// Simple Netlify function to check if the API is working
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "ok", message: "API is working" })
  };
};
