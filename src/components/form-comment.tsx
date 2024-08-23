"use client";

import { useState } from "react";

export default function FormComment() {
  const [comment, setComment] = useState("");
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    console.log(comment);

    setComment("");
  };
  return (
    <div>
      <div className='mt-4'>
        <label
          htmlFor='comment'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Add Comment
        </label>
        <input
          value={comment}
          onChange={handleCommentChange}
          type='text'
          className='input-class'
          name='comment'
        />
        <button
          onClick={handleSubmitComment}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-3 disabled:bg-gray-400'
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
}
