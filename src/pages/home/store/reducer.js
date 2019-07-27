import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScorll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
};

const addArticleList = (state, action) => {
  return state.set('articleList', state.get('articleList').concat(action.list));
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGELE_SCORLL_SHOW:
      return state.set('showScorll', action.show);
    default:
      return state;
  }

}