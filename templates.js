/*## React Redux Container Component ##
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ReactComponentName extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactComponentName);

*/

/* ## React Class Component

import React from 'react';

class MyReactComponent extends React.Component {
    render() {

    }
}

export default MyReactComponent;

*/

/* ## React Stateless Component 

import React from 'react';

const MyReactComponent = (props) => {
    return (

    );
}

export default MyReactComponent;

*/
