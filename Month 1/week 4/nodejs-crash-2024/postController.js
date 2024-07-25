const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
];

// using new ESmodule approach
const getPosts = () => posts;

export const getPostsLength = () => posts.length;

export default getPosts;