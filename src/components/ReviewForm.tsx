import React, { useContext, useState } from "react";
import { IReview } from "../types/types";
import { DataContext } from "../context/dataContext";
import { v4 as uuidv4 } from "uuid";
interface IForm {
  restarauntId: string | undefined;
}
const ReviewForm = ({ restarauntId }: IForm) => {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState<number>(0);
  const { addReview } = useContext(DataContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReviewId = uuidv4();

    if (author && comment && rate >= 0 && rate <= 5) {
      const review: IReview = {
        id: newReviewId,
        author: author,
        comment: comment,
        stars: rate,
      };
      if (!restarauntId) {
        console.error("Restaurant ID is not defined");
        return;
      }
      addReview(restarauntId, review);
      setAuthor("");
      setComment("");
      setRate(0);
    }
  };

  return (
    <div className="Review-Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Author">Name</label>
        <br />
        <textarea
          id="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor="Comment">Comment</label>
        <br />
        <textarea
          id="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="volume">Volume</label>
        <br />
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="5"
          value={rate} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRate(Number(e.target.value));
          }}
        />
        <br />
        <button type="submit">Leave a Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
