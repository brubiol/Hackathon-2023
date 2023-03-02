import {Client, Account, Databases, Storage} from 'appwrite'

const client = new Client();

client
.setEndpoint('http://159.89.232.66/v1')
.setProject('63fad9cbbde619723fd1');

export const account = new Account(client)

export const databases = new Databases(client, '63fadafebf2963bb6642')

export const storage = new Storage(client);