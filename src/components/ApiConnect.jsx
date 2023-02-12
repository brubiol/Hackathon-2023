import axios from 'axios';


const API_KEY ='7b26b6f24d231d8adfdd88783e41784e2c717add8ffc80e8ac5c8865697ae44657fd31514b7a951983ec0af614b536ab7f0b3aafaada6b0220fcd9614c04f688df8f26774b7e3775ff85c6247d333679d27765665dcb9b2b51f3466baba69c65e1f10b91b04513cf3d4afedb30fe168412a7ce31f04d19491466e27414c772f8'
const api = axios.create({
  baseURL: 'https://api.appwrite.io/v1',
  headers: {
    'x-api-key': API_KEY,
  },
});


export function createPost(collection, caption, likes) {
  return api.post('/databases/documents', {
    collection: collection,
    document: { caption: caption, likes: likes },
  });
}


export function getPosts(collection) {
  return api.get(`/databases/collections/${collection}/documents`);
}