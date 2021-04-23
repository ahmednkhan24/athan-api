import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const response = {
      hello: `No Auth route. ${Math.random()}`
    };

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({})
    };
  }
};
