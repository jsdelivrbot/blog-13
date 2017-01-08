import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render(){
    // const handleSubmit = this.props.handleSubmit;
    // const title = this.props.fields.title
    // const categories = this.props.fields.categories
    // const content = this.props.fields.content
    // ES6 version:
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    // { ...title } destructures the object; ensures that everyone of the title properties shows up inside the input
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}` }>
          <label>Title</label>
          <input type="text" className="form-control" { ...title } />
          <div className="text-help">
            {title.touched ? title.error : '' }
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}` }>
          <label>Categories</label>
          <input type="text" className="form-control" { ...categories }/>
          <div className="text-help">
            {categories.touched ? categories.error : '' }
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}` }>
          <label>Content</label>
          <textarea className="form-control" { ...content } />
            <div className="text-help">
              {content.touched ? content.error : '' }
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = 'Enter a username';
  }
  if (!values.categories){
    errors.categories = 'Enter categories';
  }
  if (!values.content){
    errors.content = 'Enter content';
  }
  return errors;
}

// redux-form injects props into our component in the same way as connect helper function - but arguments slightly different
// connect: 1st argument mapStateToProps, 2nd mapDispatchToProps
// reduxForm: 1st argument form config, 2nd argument mapStateToProps, 3rd mapDispatchToProps
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'], validate
}, null, { createPost })(PostsNew);
