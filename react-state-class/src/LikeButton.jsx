import { useState } from "react";

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    const [clicks, setClicks] = useState(0);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };

    const likeStyle = { color: "red" };

    return (
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike} style={{ cursor: "pointer" }}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}
