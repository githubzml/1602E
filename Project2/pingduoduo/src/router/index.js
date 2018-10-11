import IndexPage from '../routes/IndexPage';
import DetailPage from '../routes/DetailPage';

export default {
  routes: [{
    path: '/index',
    component: IndexPage
  },{
    path: '/detail',
    component: DetailPage,
    children: [{
      path: '/detail/home',
      component: ()=><h1>detail 100</h1>
    }]
  }]
}
