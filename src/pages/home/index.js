import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
}
  from './style';


class Home extends PureComponent {

  handleSCrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showaScorll ? <BackTop onClick={this.handleSCrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changleHomeData();
    this.bindEvents();
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeSorllTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeSorllTopShow)
  }
}
const mapState = (state) => ({
  showaScorll: state.getIn(['home', 'showScorll'])
})
const mapDispatch = (dispatch) => ({
  changleHomeData() {
    const action = actionCreators.getList();
    dispatch(action);
  },
  changeSorllTopShow() {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    }else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapState, mapDispatch)(Home);