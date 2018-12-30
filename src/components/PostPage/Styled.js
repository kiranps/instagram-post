import React from "react";
import styled from "styled-components/macro";
import Hearts from "components/Icons/Hearts";
import CommentIcon from "components/Icons/Comment";

const Post = styled.div``;

const TitleBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  top: 0;
  width: 100%;
  height: 52px;
  padding: 8px;
  line-height: 52px;

  > div {
    display: inline-block;
    vertical-align: top;
  }
`;

const Avatar = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserName = styled.div`
  line-height: 40px;
  padding-left: 10px;
`;

const Image = styled.img`
  margin: 0 auto;
  width: 100%;
  display: block;
`;

const Buttons = styled.section`
  padding: 10px 16px;
`;

const LikeIcon = props => <Hearts {...props} style={{ marginRight: "10px" }} />;

const LikeCount = styled.div`
  padding: 0px 16px;
  color: #262626;
  font-weight: 600;
  font-size: 14px;
`;

const Comments = styled.div`
  padding: 0px 40px 0 16px;
`;

const Comment = styled.div`
  margin-top: 10px;

  > div {
    display: inline-block;
  }
`;

const User = styled.div`
  padding-right: 6px;
  color: #262626;
  font-weight: 600;
  font-size: 14px;
`;

const Message = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const CommentLike = props => (
  <Hearts
    {...props}
    size="14px"
    style={{ position: "absolute", right: "10px" }}
  />
);

const PostedAt = styled.div`
  padding: 10px 16px;
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
`;

const CommentBox = styled.div`
  padding: 10px 16px;
  border-top: 1px solid #efefef;
`;

const TypeComment = styled.textarea.attrs({
  placeholder: "Add a comment..."
})`
  vertical-align: top;
  width: 85%;
  height: 40px;
  border: none;
  outline: none;
  resize: none;
`;

const SubmitComment = styled.button`
  vertical-align: top;
  width: 15%;
  background: #fff;
  color: #3897f0;
  height: 40px;
  border: none;
  outline: none;
`;

Post.TitleBar = TitleBar;
Post.Avatar = Avatar;
Post.UserName = UserName;
Post.Image = Image;
Post.Buttons = Buttons;
Buttons.Like = LikeIcon;
Buttons.Comment = CommentIcon;
Post.LikeCount = LikeCount;
Post.Comments = Comments;
Post.Comment = Comment;
Post.Comment.User = User;
Post.Comment.Message = Message;
Post.Comment.Like = CommentLike;
Post.PostedAt = PostedAt;
Post.CommentBox = CommentBox;
Post.TypeComment = TypeComment;
Post.SubmitComment = SubmitComment;

export { Post };
