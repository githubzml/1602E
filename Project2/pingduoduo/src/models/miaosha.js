import { miaosha } from "../services/example";

export default {

  namespace: 'miaosha',

  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *miaosha({payload}, {call, put}){
      let data = yield call(miaosha);
      console.log('data...', data);
      yield put({
        type: 'updateMiaosha',
        payload: ''
      })
    }
  },

  reducers: {
    updateMiaosha(state, action){
      return {}
    }
  },

};
