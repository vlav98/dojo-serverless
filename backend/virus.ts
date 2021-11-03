import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 } from 'uuid';
import {success} from '@libs/response';

export const main: APIGatewayProxyHandler = async () => {
  const viruses = [
    {id: v4()},
    {id: v4()},
    {id: v4()},
    {id: v4()},
  ];
  return success({viruses});
};
