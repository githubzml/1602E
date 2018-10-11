import IndexPage from '../routes/IndexPage';
import DetailPage from '../routes/DetailPage';

export default {
  routes: [{
    path: '/',
    component: IndexPage
  },{
    path: '/detail',
    component: DetailPage,
    children: [{
      path: '/detail/100',
      component: ()=><h1>detail 100</h1>
    }]
  }]
}
