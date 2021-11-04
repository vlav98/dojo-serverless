import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import uuid from 'uuid';
import { success } from '@libs/response';

const documentClient = new DynamoDB.DocumentClient();

export const main: APIGatewayProxyHandler = async () => {
    const virusId = uuid();

    var params = {
        TableName: 'dojo-serverless-table',
        Item: {
            partitionKey: 'Virus',
            sortKey: virusId
        },
    }

    await documentClient.put(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    }).promise();

    return success({ id: virusId });
};