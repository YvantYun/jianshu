import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


const changeList = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list) 
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeList(result);
      dispatch(action);
    }).catch(() => {
      console.log('error');
    });
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result));
    });
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGELE_SCORLL_SHOW,
  show
});