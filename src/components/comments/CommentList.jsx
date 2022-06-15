import React from "react";
import { useState } from "react";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

export const CommentList = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    if (!comment.text || /^\s*$/.test(comment.text)) {
      return;
    }

    const newComment = [comment, ...comments];

    setComments(newComment);
  };

  const completeComment = (id) => {
    let updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        comment.isComplete = !comment.isComplete;
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="mt-3">
      <CommentForm onSubmit={addComment} />
      <Comment comments={comments} completeComments={completeComment} />
    </div>
  );
};
