import { gql } from '@urql/core';
import client from './client'

const FOLDER_ID = null; // ''/null/undefined => without folder; ID => inside that folder
const NAME = 'example folders'
const DESCRIPTION = 'I am a small description'
const LABELS = ['P1234']

const CREATE_FOLDER = gql`
mutation CreateFolder(
  $name: String!
  $labels: [String]
  $description: String
  $folderId: String
) {
  createFolder(
    input: {
      description: $description
      parentId: $folderId
      name: $name
      labels: $labels
    }
  ) {
    id
    name
    description
    labels
  }
}
`;

async function run() {
  const resp = await client.mutation(CREATE_FOLDER, { 
    folderId: FOLDER_ID, 
    name: NAME,
    labels: LABELS,
    description: DESCRIPTION
   }).toPromise()
  console.debug(resp.data?.createFolder)
}

run()