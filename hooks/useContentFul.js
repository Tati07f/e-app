import { createClient } from 'contentful'

export const contentFulClient = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})