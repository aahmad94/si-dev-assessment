import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTask } from '../../../actions/task';
import Tasks from './tasks';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  tasks: state.entities.tasks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTask: (task) => dispatch(createTask(task))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tasks)
);