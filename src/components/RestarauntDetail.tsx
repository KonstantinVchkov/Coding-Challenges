import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import { calculateAverageRatings } from "../utils/RatingFunction";
import ReviewForm from "./ReviewForm";

const RestarauntDetail = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const restarauntData = data.find((cardId) => cardId.id === id);

  return (
    <>
      {restarauntData && (
        <div className="restarauntDetailCard">
          <div className="main-detailed-restaraunt">
            <h2>{restarauntData.businessname}</h2>
            <div className="restaraunt-card">
              <img
                src={restarauntData.image}
                alt={restarauntData.businessname}
              />
              <div className="gray-box">
                <p>
                  {calculateAverageRatings(restarauntData.reviewsList) === 0
                    ? ""
                    : `The Rating is: ${calculateAverageRatings(
                        restarauntData.reviewsList
                      )}`}
                </p>

                <p>
                  {restarauntData.reviewsList.length === 0
                    ? ""
                    : `based on ${restarauntData.reviewsList.length} reviews`}{" "}
                </p>
                <p>
                  Phone Number: {""}
                  {restarauntData.phone}{" "}
                </p>
                <p>
                  Email: {""}
                  {restarauntData.email}{" "}
                </p>
                <p>
                  Adress: {""}
                  {restarauntData.address}{" "}
                </p>
                <p>
                  Parking Lot:{" "}
                  {restarauntData.parkinglot ? (
                    <span>We have parking</span>
                  ) : (
                    <span>Sorry we dont have parking</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="Reviews">
            <h2>Reviews</h2>
            {restarauntData.reviewsList.map((review) => (
              <div className="Reviewer" key={review.id}>
                <p>Author: {review.author}</p>
                <p>Message: {review.comment}</p>
                <p>Stars: {review.stars}</p>
              </div>
            ))}
          </div>
          <div className="Add-review">
            <h2>Give us some Feedback</h2>
            <ReviewForm restarauntId={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default RestarauntDetail;
