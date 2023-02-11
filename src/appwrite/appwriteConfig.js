import {Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint('http://108.61.222.234/v1').setProject('63e7c410985e75665e26')

export const account = new Account(client)

export const databases = new Databases(client, '63e7dab6593b65a6cef9')