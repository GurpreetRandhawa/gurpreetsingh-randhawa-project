import "./Comment.scss";
import { useEffect, useState } from "react";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function Comment({ comm }) {
  return (
    <section className="comment">
      <div className="comment__title">Our Testimonials</div>
      <div className="comment__box">
        {comm.map((comment) => (
          <div className="comment__list" key={comment.id}>
            <div className="comment__image-container">
              <div className="comment__i-con">
                <img className="comment__image" src={comment.image} alt="" />
              </div>
            </div>
            <div className="comment__comm-text">
              <div className="comment__comm-para">{comment.comment}</div>
              <div className="comment__name">{comment.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
