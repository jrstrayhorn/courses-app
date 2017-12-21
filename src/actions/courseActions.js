import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

// New ES7 async/await
export const loadCourses = () => async dispatch => {
  try {
    const courses = await courseApi.getAllCourses();
    dispatch(loadCoursesSuccess(courses));
  } catch (error) {
    throw error;
  }
};
