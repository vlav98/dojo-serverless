import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { failure, success } from '@libs/response';
const documentClient = new DynamoDB.DocumentClient();

export const main: APIGatewayProxyHandler = async event => {
    if (!event.pathParameters || !event.pathParameters.id) {
        return failure({ message : "NO ID PROVIDED"});
    }

    var { id } = event.pathParameters;
    var params = {
        TableName: 'dojo-serverless-table',
        Key: {
            partitionKey: 'Virus',
            sortKey: id
        },
    }

    await documentClient.delete(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    }).promise();

    return success({ id });
};