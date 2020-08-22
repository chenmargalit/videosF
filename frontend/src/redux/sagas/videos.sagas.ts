import { put, takeLatest } from 'redux-saga/effects';
import { types } from '../../components/static/static';

import axios from 'axios';

// at the cost of using a static object, and having to update it, we get a one generator to rule them all architecture.
import { campaignIds, header } from '../../components/static/static';

const addVideosToArray = (videos: any) => {
  const fetchedVideos: string[] = [];
  videos.data.docs.map((obj: any): void => {
    fetchedVideos.push(obj.videos[0]);
  });

  return fetchedVideos;
};

export function* videosAmount() {
  yield takeLatest(types.FETCH_VIDEOS_AMOUNT, fetchAmountOfVideos);
}

export function* fetchAmountOfVideos({ payload }: any) {
  const videos = yield axios.get(
    `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignIds[payload]}&offset=0&limit=100000&applicationSource=web&Authorization=${header}`
  );
  const videosAmount: string[] = videos.data.docs;
  let counter: number = 0;
  videosAmount.map((vid: any) => {
    if (vid.videos.length > 0) {
      counter++;
    }
  });
  yield put({ type: types.VIDEOS_AMOUNT, payload: counter });
}

export function* addMore() {
  yield takeLatest(types.FETCH_MORE_VIDEOS, addSixMore);
}

export function* addSixMore({ payload, offset }: any) {
  const videos = yield axios.get(
    `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignIds[payload]}&offset=${offset}&limit=6&applicationSource=web&Authorization=${header}`
  );

  const fetchedVideos: string[] = addVideosToArray(videos);

  yield put({ type: types.ADD_6_TO_REDUX, payload: fetchedVideos });
  yield put({ type: types.STORE_OFFSET, payload: offset });
}

export function* genericFetch() {
  yield takeLatest(types.GENERIC, storeGenericFetch);
}

export function* storeGenericFetch({ payload, locationData, offset = 0, limit = 6 }: any) {
  yield put({ type: 'CLEAR_STORE' });
  const videos = yield axios.get(
    `https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignIds[payload]}&offset=${offset}&limit=${limit}&applicationSource=web&Authorization=${header}`
  );

  const fetchedVideos: string[] = addVideosToArray(videos);

  const videosAmount = videos.data.docs.length;
  yield put({ type: types.VIDEOS_AMOUNT, payload: videosAmount });
  yield put({ type: types.STORE_VIDEOS, payload: fetchedVideos });
}
