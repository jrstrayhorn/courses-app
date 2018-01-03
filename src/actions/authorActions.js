import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export const loadAuthors = () => async dispatch => {
  try {
    const authors = await AuthorApi.getAllAuthors();
    dispatch(loadAuthorsSuccess(authors));
  } catch (error) {
    throw error;
  }
};
