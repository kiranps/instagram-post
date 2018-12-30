const fakeData = {
  id: 1,
  username: "Nature",
  avatar_url: "kerala.jpg",
  image_url: "kerala.jpg",
  posted_at: "2018-01-01T14:00:00.000Z",
  like: false,
  likes: 20,
  comments: [
    {
      user: "kiran",
      message: "hello world hello world hello world hello world hello world",
      like: true
    },
    {
      user: "kiran",
      message: "hello world hello world hello world hello world hello world",
      like: false
    },
    {
      user: "kiran",
      message:
        "hello world hello world hello hllo wld ello wohello world hello world hello world",
      like: false
    },
    {
      user: "kiran",
      message: "hello world hello world",
      like: true
    },
    {
      user: "kiran",
      message: "hello world",
      like: true
    }
  ]
};

export const fetchPost = () => {
  return new Promise(resolve => {
    resolve(fakeData);
  });
};
