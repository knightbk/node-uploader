import React, { Component } from "react";
import { connect } from "react-redux";
import { _fetchBlog } from "../../reducers/blogsReducer";

class BlogShow extends Component {
  componentDidMount() {
    this.props._fetchBlog(this.props.match.params._id);
  }

  render() {
    if (!this.props.blog) {
      return "";
    }

    const { title, content } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(
  mapStateToProps,
  { _fetchBlog }
)(BlogShow);
