import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 } from 'uuid';
import {success} from '@libs/response';

export const main: APIGatewayProxyHandler = async event => {
  let viruses;

  const virusId = event.pathParameters && event.pathParameters.id ? event.pathParameters.id : null;

  const virusesData = [
    {id: v4()},
    {id: v4()},
    {id: v4()},
    {id: v4()},
  ];
  
  viruses = virusId !== null ? [ virusId ] : virusesData;

  return success({viruses});
};
