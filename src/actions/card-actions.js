import {
    FETCH_CARDS,
  } from './action-types';
  
  const asyncAction = (responsePromise, actionName, optionalPayload = null) => async (dispatch) => {
    try {
      dispatch({
        type: `${actionName}_START`,
      });
  
      const response = await responsePromise;
  
      if (!response.ok) {
        throw new Error(`Looks like there ware a problem: ${response.status} ${response.statusText}`);
      }
  
      const payload = await response.json();
      dispatch({
        type: `${actionName}_SUCCESS`,
        payload: Object.keys(payload).length ? payload : optionalPayload,
      });
    } catch (error) {
      dispatch({
        type: `${actionName}_ERROR`,
        payload: error,
      });
    }
  };
  
  export const fetchCards = () =>  asyncAction(fetch('http://localhost:3000/karten'), FETCH_CARDS);
  

