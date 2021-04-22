/**
 * ACTION TYPES
 */
const GET_GEMS = 'GET_GEMS';
const SAVE_GEM = 'SAVE_GEM';
const REMOVE_GEM = 'REMOVE_GEM';

/**
 * INITIAL STATE
 */
const savedGems = [];

/**
 * ACTION CREATORS
 */
const addGem = (gem) => ({ type: SAVE_GEM, gem });
const removeGem = (gem) => ({ type: REMOVE_GEM, gem });
const getGems = (gems) => ({ type: GET_GEMS, gems });

/**
 * THUNK CREATORS
 */

export const addGemToStorage = (gem) => async (dispatch) => {
  try {
    localStorage.setItem(gem.name, JSON.stringify(gem));
    dispatch(addGem(gem));
  } catch (err) {
    console.log(err);
  }
};

export const removeGemFromStorage = (gem) => async (dispatch) => {
  try {
    localStorage.removeItem(gem.name);
    dispatch(removeGem(gem));
  } catch (err) {
    console.log(err);
  }
};

export const getGemsFromStorage = () => async (dispatch) => {
  try {
    let gems = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      gems.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    console.log(gems);
    dispatch(getGems(gems));
  } catch (err) {
    console.log(err);
  }
};

/**
 * REDUCER
 */
export default function (state = savedGems, action) {
  switch (action.type) {
    case SAVE_GEM:
      return [...state, action.gem];
    case REMOVE_GEM:
      let stateCopy = state.filter((el) => {
        return el.name !== action.gem.name;
      });
      return stateCopy;
    case GET_GEMS:
      console.log('GET GEMS', action.gems);
      return action.gems;
    default:
      return state;
  }
}
