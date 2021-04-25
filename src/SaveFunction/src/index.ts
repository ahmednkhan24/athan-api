import AWS from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const id = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 10
    const params = {
      TableName: process.env.TABLE_NAME, // get the table name from the automatically populated environment variables
      Item: {
        id, // modify with each invoke so the id does not repeat
        content: `Data with id: ${id}` // modify content here
      },
      ConditionExpression: 'attribute_not_exists(id)', // do not overwrite existing entries
      ReturnConsumedCapacity: 'TOTAL'
    };

    const response = await dynamodb.put(params).promise();
    console.log(
      `Writing item ${params.Item.id} to table ${process.env.TABLE_NAME}.`
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response)
    };
  } catch (err) {
    console.log(
      `Error writing to table ${process.env.TABLE_NAME}. Make sure this function is running in the same environment as the table.`
    );
    return {
      statusCode: 401,
      body: JSON.stringify({})
    };
  }
};
