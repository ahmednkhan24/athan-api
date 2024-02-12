import { APIGatewayProxyHandler } from 'aws-lambda';
import { config, DynamoDB } from 'aws-sdk';

config.update({
  region: 'us-east-2'
});

const dynamo = new DynamoDB.DocumentClient();

const TABLE_NAME = process.env.DB_TABLE_NAME || 'athan-tracker-db-dev';

export type DynamoPutItemParams = DynamoDB.DocumentClient.PutItemInput;

export const createNewItem = async (data: any) => {
  const params: DynamoPutItemParams = {
    TableName: TABLE_NAME,
    Item: {
      email: data.email,
      ...data
    }
  };
  console.log('item for creation: ', JSON.stringify(params));
  await dynamo.put(params).promise();

  return params.Item;
};

const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('event: ', JSON.stringify(event));
    const body = JSON.parse(event.body);
    const createdItem = await createNewItem(body);

    return {
      statusCode: 201,
      body: JSON.stringify({ createdItem }),
      headers: {
        'content-type': 'application/json'
      }
    };
  } catch (err) {
    console.log('Error in handler: ', JSON.stringify(err));
    return {
      statusCode: 500,
      body: 'Internal Server Error'
    };
  }
};

export default handler;
