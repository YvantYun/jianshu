import * as constants from './constants';
import axios from 'axios';

const showDetailContent = (result) => ({
  type: constants.SHOW_DETAIL_CONTENT,
  title: result.title,
  content: result.content

})

export const getDetailContent = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(showDetailContent(result));
    }).catch(() => {
      console.log('error');
    })
  }
}