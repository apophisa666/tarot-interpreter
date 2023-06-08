import { FETCH_CARDS_SUCCESS, FETCH_CARDS_ERROR, FETCH_CARDS_START } from '../actions/action-types';

export const initialState = {
  cards: [],
  isFetching: false,
  isSubmitting: false,
  error: null,
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case FETCH_CARDS_START:
      return { ...state, isFetching: true, error: null };

    case FETCH_CARDS_SUCCESS:
      return { ...state, isFetching: false, error: null, cards: payload };

    case FETCH_CARDS_ERROR:
      return { ...state, isFetching: false, error: payload };
    default:
      return initialState;
  }
};