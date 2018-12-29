import React, { Component } from "react";
import { Post } from "./Styled";

class PostPage extends Component {
  render() {
    return (
      <Post>
        <Post.TitleBar>
          <Post.Avatar>d</Post.Avatar>
          <Post.UserName>d</Post.UserName>
        </Post.TitleBar>
        <Post.Image />
        <Post.Buttons>
          <Post.Buttons.Like>2</Post.Buttons.Like>
          <Post.Buttons.Comment>2</Post.Buttons.Comment>
        </Post.Buttons>
        <Post.LikeCount>22 likes</Post.LikeCount>
        <Post.Comments>
          <Post.Comment>
            <Post.Comment.User>ki</Post.Comment.User>
            <Post.Comment.Message>dsds</Post.Comment.Message>
            <Post.Comment.Like>2</Post.Comment.Like>
          </Post.Comment>
        </Post.Comments>
        <Post.PostedAt>232</Post.PostedAt>
        <Post.CommentBox>23</Post.CommentBox>
      </Post>
    );
  }
}

export default PostPage;
