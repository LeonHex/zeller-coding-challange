import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api-graphql';
import {ListZellerCustomers} from '../graphql/queries';
import {ICustomersResponse} from '../types';

export function fetchCustomers() {
  return API.graphql(graphqlOperation(ListZellerCustomers)) as Promise<
    GraphQLResult<ICustomersResponse>
  >;
}
