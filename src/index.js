import 'babel-polyfill';
import dva from 'dva';
import { reducer as formReducer } from 'redux-form'
import { syncStateToFetch } from './utils/fetch';
import createLoading from 'dva-loading';
import 'antd/lib/form/style/index.less';
import './less/index.less';
import * as Constants from './constants/Constants';
import { Storage } from './utils/common';

const initialState = Storage.getItem(Constants.LOCAL_STORAGE);

// 1. Initialize
const app = dva({
    initialState,
    extraReducers: {
        form: formReducer,
    }
});

// 2. Plugins
app.use(createLoading());

app.use({
    onStateChange: syncStateToFetch.bind(null, app, initialState)
});

// 3. Model
app.model(require('./models/User'));



// 4. Router
app.router(require('./router'));



// 5. Start
app.start('#root');