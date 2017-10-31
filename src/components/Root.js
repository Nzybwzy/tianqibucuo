/**
 * Created by nap on 17/5/15.
 */
import React from 'react';
import { connect } from 'dva';


class Root extends React.Component {
    
    
    render() {
        const {children} = this.props;
        return children;
    }
}

export default connect()(Root);