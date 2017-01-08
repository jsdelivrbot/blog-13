import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // componentWillMount will be called when initially rendered, but not subsequent rerenders
  componentWillMount(){
     this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <div> List of blog posts </div>
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts}, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// passing an argument of functions as the second argument to connect automatically binds dispatch to thost functions and thereby negates the need to call mapDispatchToProps
export default connect(null, { fetchPosts })(PostsIndex);
