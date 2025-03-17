import { GraphQLClient } from 'graphql-request';
import { getDatoCmsToken } from './getDatoCmsToken';

const endpoint = 'https://graphql.datocms.com/';

const datoCMSClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${getDatoCmsToken()}`,
  },
});

export default datoCMSClient;
