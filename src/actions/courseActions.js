import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

// New ES7 async/await
export const loadCourses = () => async dispatch => {
  dispatch(beginAjaxCall());
  try {
    const courses = await courseApi.getAllCourses();
    dispatch(loadCoursesSuccess(courses));
  } catch (error) {
    throw error;
  }
};

export const saveCourse = course => async dispatch => {
  dispatch(beginAjaxCall());
  try {
    const savedCourse = await courseApi.saveCourse(course);
    course.id
      ? dispatch(updateCourseSuccess(savedCourse))
      : dispatch(createCourseSuccess(savedCourse));
  } catch (error) {
    dispatch(ajaxCallError(error));
    throw error;
  }
};
