import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./Comments.css";

export default function Comments() {
    const [comments, setComments] = useState([
        { username: "@sk", remarks: "Great job!", rating: 4 }
    ]);

    const addNewComment = (comment) => {
        setComments((prev) => [comment, ...prev]);
    };

    return (
        <div className="page">
            {comments.map((c, i) => (
                <div className="comment-card" key={i}>
                    <p className="comment-text">
                        {c.remarks
                            ? `${c.remarks} (rating = ${c.rating})`
                            : `(rating = ${c.rating})`}
                    </p>
                    <p className="comment-user">– {c.username}</p>
                </div>
            ))}

            <CommentsForm addNewComment={addNewComment} />
        </div>
    );
}
