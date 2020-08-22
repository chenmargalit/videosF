import { types } from '../../components/static/static';

type State = {
  videos: string[];
  amount: number;
  offset: number;
};

type Action =
  | {
      type: types.STORE_VIDEOS;
      payload: string[];
    }
  | {
      type: types.ADD_6_TO_REDUX;
      payload: string[];
    }
  | {
      type: types.CLEAR_STORE;
    }
  | {
      type: types.VIDEOS_AMOUNT;
      payload: number;
    }
  | {
      type: types.STORE_OFFSET;
      payload: number;
    };

export const videosReducer = (
  state: State = { videos: [], amount: 0, offset: 0 },
  action: Action
) => {
  switch (action.type) {
    case types.STORE_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };

    case types.ADD_6_TO_REDUX:
      return {
        ...state,
        videos: [...state.videos, ...action.payload],
      };

    case types.CLEAR_STORE:
      return {
        ...state,
        videos: [],
        amount: 0,
      };

    case types.VIDEOS_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };

    case types.STORE_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };

    default:
      return state;
  }
};

export default videosReducer;
