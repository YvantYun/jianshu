import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: '',
  content: ''
});

const changeDetailContent = (state, action) => {
  return state.merge({
    title: fromJS(action.title),
    content: fromJS(action.content)
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SHOW_DETAIL_CONTENT:
      return changeDetailContent(state, action);
    default:
      return state;
  }

}