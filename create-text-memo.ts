import { gql } from '@urql/core';
import client from './client'

const FOLDER_ID = null; // ''/null/undefined => without folder; ID => inside that folder
const TEXT_CONTENT = 'hello world'
const DESCRIPTION = 'I am a small description'
const BG_COLOR = '#ffeeff'

const CREATE_MEMO = gql`
mutation CreateDocumentText(
  $textContent: String!
  $bgColor: String
  $description: String
  $folderId: String
) {
  createDocumentText(
    textContent: $textContent
    backgroundColor: $bgColor
    description: $description
    folderId: $folderId
  ) {
    id
    textContent
    textContentBackground
    isTextDocument
    createdAt
    uploadedAt
    description
  }
}


`;

async function run() {
  const resp = await client.mutation(CREATE_MEMO, { 
    folderId: FOLDER_ID, 
    textContent: TEXT_CONTENT,
    bgColor: BG_COLOR,
    description: DESCRIPTION
   }).toPromise()
  console.debug(resp.data?.createDocumentText)
}

run()