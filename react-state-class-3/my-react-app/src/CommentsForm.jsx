import { useFormik } from "formik";

export default function CommentsForm({ addNewComment }) {
    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5
        },

        onSubmit: (values, { resetForm }) => {
            addNewComment({
                username: values.username || "anonymous",
                remarks: values.remarks,
                rating: values.rating
            });

            resetForm();
        }
    });

    return (
        <div className="form-box">
            <h3>Give a comment</h3>

            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />

                <textarea
                    name="remarks"
                    placeholder="Add your remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                />

                <input
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
