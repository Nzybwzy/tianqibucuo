/*
 * 
 */
import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import l from './MainContainer.less';
import cx from 'classnames';
class MainContainer extends React.Component {
    render() {
        const {children, params, location} = this.props;
        // 
        return (
            <div className={l.main}>
                {children}
                <Button>天气不错</Button>
            </div>
        );
    }
}

export default connect(state => {
    const {  } = state;
    return {
        
    }
})(MainContainer);