import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from "aws-sdk";

import { Virus } from './types';
import { success } from '@libs/response';

var docClient = new DynamoDB.DocumentClient();


export const main: APIGatewayProxyHandler = async () => {
  var params = {
    TableName: 'dojo-serverless-table',
    KeyConditionExpression: 'partitionKey = :partitionKey',
    ExpressionAttributeValues: {
      ':partitionKey': 'Virus'
     },
  };

  const { Items = [] } = await docClient
    .query(params, function(err, data) {
      if(err) {
        console.log(err);
      } else {
        console.log(data.Items);
      }
    })
    .promise();
  console.log(Items)
  return success({ viruses : (Items as Virus[]).map(({ sortKey }) => ({id : sortKey})),
  })
}; 