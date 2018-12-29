import styled from "styled-components";

const Post = styled.div``;
const TitleBar = styled.div``;
const Avatar = styled.div``;
const UserName = styled.div``;
const Image = styled.img``;
const Buttons = styled.div``;
const LikeIcon = styled.div``;
const CommentIcon = styled.div``;
const LikeCount = styled.div``;
const Comments = styled.div``;
const Comment = styled.div``;
const User = styled.div``;
const Message = styled.div``;
const PostedAt = styled.div``;
const CommentBox = styled.div``;

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
Post.Comment.Like = LikeIcon;
Post.PostedAt = PostedAt;
Post.CommentBox = CommentBox;

export { Post };
