(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(44)},31:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(2),l=n.n(i),m=(n(31),n(3)),c=n(4),r=n(6),s=n(5),d=n(7),p=n(8),u=n(18),g=n.n(u),h=n(21),C=n.n(h),f=n(22),x=n.n(f),y=n(23),v=n.n(y),k=function(){return fetch("post.json").then(function(e){return e.json()})},w=n(1),b=function(e){var t=e.onClick,n=e.active,o=e.size,i=e.style;return a.a.createElement("svg",{style:Object(p.a)({width:o,height:o,cursor:"pointer"},i),viewBox:"0 0 24 24",onClick:t},n?a.a.createElement("path",{fill:"#ed4956",d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}):a.a.createElement("path",{fill:"#757575",d:"M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"}))};b.defaultProps={active:!1,size:"24px"};var _=b,E=function(e){var t=e.onClick,n=e.size;return a.a.createElement("svg",{style:{width:n,height:n,cursor:"pointer"},viewBox:"0 0 24 24",onClick:t},a.a.createElement("path",{fill:"#757575",d:"M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z"}))};E.defaultProps={size:"24px"};var S=E,I=w.a.div.withConfig({displayName:"Styled__Post",componentId:"sc-17xugao-0"})([""]),L=w.a.div.withConfig({displayName:"Styled__TitleBar",componentId:"sc-17xugao-1"})(["background-color:#fff;border-bottom:1px solid rgba(0,0,0,0.0975);top:0;width:100%;height:52px;padding:8px;line-height:52px;> div{display:inline-block;vertical-align:top;}"]),N=w.a.img.withConfig({displayName:"Styled__Avatar",componentId:"sc-17xugao-2"})(["height:38px;width:38px;border-radius:50%;padding:2px;border:1px solid rgba(0,0,0,0.1);"]),j=w.a.div.withConfig({displayName:"Styled__UserName",componentId:"sc-17xugao-3"})(["line-height:40px;padding-left:10px;"]),B=w.a.img.withConfig({displayName:"Styled__Image",componentId:"sc-17xugao-4"})(["margin:0 auto;width:100%;display:block;"]),O=w.a.section.withConfig({displayName:"Styled__Buttons",componentId:"sc-17xugao-5"})(["padding:10px 16px;"]),A=w.a.div.withConfig({displayName:"Styled__LikeCount",componentId:"sc-17xugao-6"})(["padding:0px 16px;color:#262626;font-weight:600;font-size:14px;"]),P=w.a.div.withConfig({displayName:"Styled__Comments",componentId:"sc-17xugao-7"})(["padding:0px 40px 0 16px;"]),z=w.a.div.withConfig({displayName:"Styled__Comment",componentId:"sc-17xugao-8"})(["margin-top:10px;> div{display:inline-block;}"]),M=w.a.div.withConfig({displayName:"Styled__User",componentId:"sc-17xugao-9"})(["padding-right:6px;color:#262626;font-weight:600;font-size:14px;"]),H=w.a.span.withConfig({displayName:"Styled__Message",componentId:"sc-17xugao-10"})(["font-size:14px;font-weight:400;"]),R=w.a.div.withConfig({displayName:"Styled__PostedAt",componentId:"sc-17xugao-11"})(["padding:10px 16px;font-size:12px;color:#999;text-transform:uppercase;"]),T=w.a.div.withConfig({displayName:"Styled__CommentBox",componentId:"sc-17xugao-12"})(["padding:10px 16px;border-top:1px solid #efefef;"]),V=w.a.textarea.attrs({placeholder:"Add a comment..."}).withConfig({displayName:"Styled__TypeComment",componentId:"sc-17xugao-13"})(["vertical-align:top;width:85%;height:40px;border:none;outline:none;resize:none;"]),U=w.a.button.withConfig({displayName:"Styled__SubmitComment",componentId:"sc-17xugao-14"})(["vertical-align:top;width:15%;background:#fff;color:#3897f0;height:40px;border:none;outline:none;"]);I.TitleBar=L,I.Avatar=N,I.UserName=j,I.Image=B,I.Buttons=O,O.Like=function(e){return a.a.createElement(_,Object.assign({},e,{style:{marginRight:"10px"}}))},O.Comment=S,I.LikeCount=A,I.Comments=P,I.Comment=z,I.Comment.User=M,I.Comment.Message=H,I.Comment.Like=function(e){return a.a.createElement(_,Object.assign({},e,{size:"14px",style:{position:"absolute",right:"10px"}}))},I.PostedAt=R,I.CommentBox=T,I.TypeComment=V,I.SubmitComment=U;var Z=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){k().then(function(e){n.setState(Object(p.a)({},e,{loading:!1}))})},n.handleLikeComment=function(e){var t=n.state.comments;n.setState({comments:C()(e,x()(t[e],{like:!t[e].like}),t)})},n.handelLikePost=function(){n.setState({like:!n.state.like})},n.handlePostComment=function(){var e=n.state.comments,t=n.commentRef.current.value;n.setState({comments:v()({user:"anonymous",message:t,like:!1},e)}),n.commentRef.current.value=""},n.handleFocusComment=function(){n.commentRef.current.focus()},n.commentRef=a.a.createRef(),n.state={loading:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.loading,o=t.avatar_url,i=t.image_url,l=t.username,m=t.posted_at,c=t.like,r=t.likes,s=t.comments;return!n&&a.a.createElement(I,null,a.a.createElement(I.TitleBar,null,a.a.createElement(I.Avatar,{src:o}),a.a.createElement(I.UserName,null,l)),a.a.createElement(I.Image,{src:i}),a.a.createElement(I.Buttons,null,a.a.createElement(I.Buttons.Like,{active:c,onClick:this.handelLikePost}),a.a.createElement(I.Buttons.Comment,{onClick:this.handleFocusComment})),a.a.createElement(I.LikeCount,null,r+(c?1:0)," likes"),a.a.createElement(I.Comments,null,s.map(function(t,n){return a.a.createElement(I.Comment,{key:n},a.a.createElement(I.Comment.User,null,t.user),a.a.createElement(I.Comment.Message,null,t.message),a.a.createElement(I.Comment.Like,{active:t.like,onClick:function(){return e.handleLikeComment(n)}}))})),a.a.createElement(I.PostedAt,null,g.a.utc(m).fromNow()),a.a.createElement(I.CommentBox,null,a.a.createElement(I.TypeComment,{ref:this.commentRef}),a.a.createElement(I.SubmitComment,{onClick:this.handlePostComment},"POST")))}}]),t}(o.Component),F=function(e){function t(){return Object(m.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(Z,{id:1})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.d537b7ac.chunk.js.map