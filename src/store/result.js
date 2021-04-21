import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_RESULT = 'GET_RESULT';

/**
 * INITIAL STATE
 */
const defaultResult = [];

/**
 * ACTION CREATORS
 */
const getResult = (result) => ({ type: GET_RESULT, result });

/**
 * THUNK CREATORS
 */

export const fetchResult = (queryStr) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/search.json?query=${queryStr}`
    );
    dispatch(getResult(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 * REDUCER
 */
export default function (state = defaultResult, action) {
  switch (action.type) {
    case GET_RESULT:
      return action.result;
    default:
      return state;
  }
}
