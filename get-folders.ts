import { gql } from '@urql/core';
import client from './client'

const FOLDER_ID = '';
const TEXT = 'hello'


const GET_FOLDERS = gql`
query GetFolders($folderId: String, $text: String) {
  folders(first: 100, filter: { parentId: $folderId, text: $text }) {
    edges {
      node {
        id
        hasSubfolders
        name
        description
        emoteIcon
        isArchived
        isRemoved
        breadcrumb {
          id
          description
          emoteIcon
          name
        }
      }
    }
  }
}

`;

async function run() {
  const resp = await client.query(GET_FOLDERS, { 
    folderId: FOLDER_ID, // '' => first level; null/undefined => whole account; string/id => only direct subfolders,
    text: TEXT,
   }).toPromise()
  console.debug(resp.data?.folders?.edges)
}

run()