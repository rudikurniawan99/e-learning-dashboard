import * as _ from 'lodash';
import {
  DELETE_RESOURCE,
  GET_RESOURCE,
  RESORUCE_ADMIN,
  RESORUCE_QUESTION,
  RESORUCE_USER,
  UPDATE_RESOURCE
} from 'redux/types';

const initialState = {
  [RESORUCE_ADMIN]: null,
  [RESORUCE_USER]: null,
  [RESORUCE_QUESTION]: null
};

export default (state = initialState, action) => {
  const { resourceName, payload } = action;
  switch (action.type) {
    case GET_RESOURCE:
      return state[resourceName];
    case UPDATE_RESOURCE:
      if (_.isArray(payload)) {
        return {
          ...state,
          [resourceName]: {
            ...state[resourceName],
            ..._.keyBy(payload, 'id')
          }
        };
      }

      return {
        ...state,
        [resourceName]: {
          ...state[resourceName],
          [payload.id]: payload
        }
      };
    case DELETE_RESOURCE:
      return {
        ...state,
        [resourceName]: _.omit(state[resourceName], payload.id)
      };
    default:
      return state;
  }
};
