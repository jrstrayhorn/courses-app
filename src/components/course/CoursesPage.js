import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
