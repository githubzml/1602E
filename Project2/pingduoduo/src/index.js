import dva from 'dva';
import './scss/common.css';

// 引入fastClick，解决移动端点击300ms延迟问题
let fastClick = require('fastclick');
fastClick.attach(document.body);

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/miaosha').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
