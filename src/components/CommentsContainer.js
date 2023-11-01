import React from 'react';

const commentsData = [
  {
    name: 'Aruna Eroji',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    replies: [],
  },
  {
    name: 'Aruna Eroji',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    replies: [
      {
        name: 'Aruna Eroji',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        replies: [],
      },
      {
        name: 'Aruna Eroji',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        replies: [
          {
            name: 'Aruna Eroji',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            replies: [
              {
                name: 'Aruna Eroji',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                replies: [
                  {
                    name: 'Aruna Eroji',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    replies: [],
                  },
                ],
              },
              {
                name: 'Aruna Eroji',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Aruna Eroji',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    replies: [],
  },
  {
    name: 'Aruna Eroji',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    replies: [],
  },
  {
    name: 'Aruna Eroji',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    replies: [],
  },
  {
    name: 'Aruna Eroji',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-slate-200 p-2 rounded-lg my-2">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZYorkKac9Q0WNiMbJDj5jzFEgtSpc3eNixWoLWrvVh5cVTdNcn1Y2ZDxX0SHvLwTdCI&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
