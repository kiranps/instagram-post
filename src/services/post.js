export const fetchPost = () => fetch(`post.json`).then(post => post.json());
