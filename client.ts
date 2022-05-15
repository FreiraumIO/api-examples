import { createClient } from '@urql/core';
import fetch from 'node-fetch'
import { API_KEY } from './config'

// soon be api.memomeister.com
const httpUrl = 'https://api.memomeister.com/graphql';
const socketUrl = 'wss://api.memomeister.com/graphql';

const urls = {
  http: httpUrl,
  socket: socketUrl,
};

const client = createClient({
  url: urls.http,
  fetch: fetch as any, // just for testing purpose
  fetchOptions: () => {
    return {
      headers: { authorization: API_KEY ? `api-key ${API_KEY}` : '' },
    };
  },
})

export default client;
