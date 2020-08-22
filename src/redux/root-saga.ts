import { all, call } from 'redux-saga/effects';

import { genericFetch, videosAmount, addMore } from './sagas/videos.sagas';

export default function* rootSaga() {
  // all, allows us to run all the functions concurrently
  yield all([call(genericFetch), call(videosAmount), call(addMore)]);
}
