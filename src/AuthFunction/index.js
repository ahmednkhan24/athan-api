exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    body: `hello world from the auth lambda. Random number: ${Math.random()}`,
  };
};
