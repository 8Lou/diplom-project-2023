import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Like } from "./../img/like.svg";
import { Button } from "@mui/material";
import { PostContext } from "../../context/context";
import "./style.css";

export const PostOfPage = ({ post, onPostLike }) => {
  const [isLikedPost, setIsPostLike] = useState(false);
  const { user, handleLike } = useContext(PostContext);

  useEffect(() => {
    const isLiked = post.likes.some((e) => e === user?._id);
    setIsPostLike(isLiked);
  }, [post.likes, user]);

  const handleClick = () => {
    onPostLike(post, isLikedPost);
  };

  return (
    <div className="postlist__container">
      {" "}
      {/* здесь замена postpage__container */}
      <img
        className="postlist__img"
        src={post.image}
        width={"600px"}
        height={"600px"}
        alt="изображение"
      />
      <div className="postpage__infa">
        <p className="postpage__author">Имя пользователя</p>
        <div className="postpage__like">
          <button
            onClick={handleClick}
            className={`card__like ${isLikedPost ? "card__like_active" : ""}`}
          >
            <Like />
            <span>{isLikedPost ? "Мне нравится" : "Не нравится"}</span>
          </button>
        </div>
        <title className="postpage__title">{post.title}</title>
        <p>{post.text}</p>

        <div>Комментарии</div>

        <span>{post.tags}</span>
        <span>28 апреля 2023</span>
        <Link to="/">
          {<Button variant="contained">Вернуться на главную страницу</Button>}
        </Link>
      </div>
    </div>
  );
};
