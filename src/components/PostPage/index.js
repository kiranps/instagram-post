import React, { Component } from "react";
import { Post } from "./Styled";
import { fetchPost } from "../../services/post";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.commentRef = React.createRef();
    this.state = { post: null };
  }

  componentDidMount = () => {
    fetchPost().then(post => {
      this.setState({ post });
    });
  };

  handleLikeComment = () => {};

  handlePostComment = () => {};

  handleFocusComment = () => {
    this.commentRef.current.focus();
  };

  render() {
    const { post } = this.state;
    return (
      post && (
        <Post>
          <Post.TitleBar>
            <Post.Avatar src={post.avatar_url} />
            <Post.UserName>{post.username}</Post.UserName>
          </Post.TitleBar>
          <Post.Image src={post.image_url} />
          <Post.Buttons>
            <Post.Buttons.Like active={post.like} />
            <Post.Buttons.Comment onClick={this.handleFocusComment} />
          </Post.Buttons>
          <Post.LikeCount>{post.likes} likes</Post.LikeCount>
          <Post.Comments>
            {post.comments.map((x, i) => (
              <Post.Comment key={i}>
                <Post.Comment.User>{x.user}</Post.Comment.User>
                <Post.Comment.Message>{x.message}</Post.Comment.Message>
                <Post.Comment.Like active={x.like} />
              </Post.Comment>
            ))}
          </Post.Comments>
          <Post.PostedAt>{post.posted_at}</Post.PostedAt>
          <Post.CommentBox>
            <Post.TypeComment ref={this.commentRef} />
            <Post.SubmitComment>POST</Post.SubmitComment>
          </Post.CommentBox>
        </Post>
      )
    );
  }
}

export default PostPage;
