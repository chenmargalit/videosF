export const header: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGQ2YWU1MWMwNzQ5ODRhYTdlYjEiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTU4NTc0NTI1OSwiZXhwIjoxNTg1ODMxNjU5fQ.S61K8RkHJ6qwxRjp9m2Pfvttd6hRBOyWRO3TimRkJA4';

export const campaignIds: any = {
  'new-in': '5f3a26d90b8a1b001ef9c712',
  'best-sellers': '5f3a270f0b8a1b001ef9c713',
  'on-sale': '5f3a27310b8a1b001ef9c714',
  'product-video': '5f3a274d0b8a1b001ef9c715',
};

// actions
export enum types {
  STORE_VIDEOS = 'store_videos',
  ADD_6_TO_REDUX = 'add_6_to_redux',
  CLEAR_STORE = 'clear_store',
  VIDEOS_AMOUNT = 'videos_amount',
  STORE_OFFSET = 'store_offset',
  GENERIC = 'generic',
  FETCH_VIDEOS_AMOUNT = 'fetch_videos_amount',
  FETCH_MORE_VIDEOS = 'fetch_more_videos',
}
