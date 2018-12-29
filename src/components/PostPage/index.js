import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import update from "ramda/es/update";
import merge from "ramda/es/merge";
import prepend from "ramda/es/prepend";
import { fetchPost } from "services/post";
import { Post } from "./Styled";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.commentRef = React.createRef();
    this.state = { loading: true };
  }

  componentDidMount = () => {
    fetchPost().then(post => {
      this.setState({ ...post, loading: false });
    });
  };

  handleLikeComment = i => {
    const { comments } = this.state;
    this.setState({
      comments: update(
        i,
        merge(comments[i], { like: !comments[i].like }),
        comments
      )
    });
  };

  handelLikePost = () => {
    this.setState({ like: !this.state.like });
  };

  handlePostComment = () => {
    const { comments } = this.state;
    const message = this.commentRef.current.value;
    this.setState({
      comments: prepend({ user: "anonymous", message, like: false }, comments)
    });
    this.commentRef.current.value = "";
  };

  handleFocusComment = () => {
    this.commentRef.current.focus();
  };

  render() {
    const {
      loading,
      avatar_url,
      image_url,
      username,
      posted_at,
      like,
      likes,
      comments
    } = this.state;
    return (
      !loading && (
        <Post>
          <Post.TitleBar>
            <Post.Avatar src={avatar_url} />
            <Post.UserName>{username}</Post.UserName>
          </Post.TitleBar>
          <Post.Image src={image_url} />
          <Post.Buttons>
            <Post.Buttons.Like active={like} onClick={this.handelLikePost} />
            <Post.Buttons.Comment onClick={this.handleFocusComment} />
          </Post.Buttons>
          <Post.LikeCount>{likes + (like ? 1 : 0)} likes</Post.LikeCount>
          <Post.Comments>
            {comments.map((x, i) => (
              <Post.Comment key={i}>
                <Post.Comment.User>{x.user}</Post.Comment.User>
                <Post.Comment.Message>{x.message}</Post.Comment.Message>
                <Post.Comment.Like
                  active={x.like}
                  onClick={() => this.handleLikeComment(i)}
                />
              </Post.Comment>
            ))}
          </Post.Comments>
          <Post.PostedAt>{moment.utc(posted_at).fromNow()}</Post.PostedAt>
          <Post.CommentBox>
            <Post.TypeComment ref={this.commentRef} />
            <Post.SubmitComment onClick={this.handlePostComment}>
              POST
            </Post.SubmitComment>
          </Post.CommentBox>
        </Post>
      )
    );
  }
}

PostPage.propTypes = {
  id: PropTypes.number
};

export default PostPage;
