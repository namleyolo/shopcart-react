import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {apiProduct} from "../../config/api";

export default function Test() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const {handleSubmit, register, errors, reset} = useForm();
    const onSubmitForm = (values, e) => {
        console.log(values.email)
        console.log(values.username)
        // axios.post(apiProduct, {
        //     firstName: 'First name',
        //     lastName: 'Last name'
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="form-group">
                    <input className="form-control"
                           name="email"
                           ref={register({
                               required: "Required",
                               pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                   message: "invalid email address"
                               }
                           })}
                    />
                    {errors.email && errors.email.message}
                </div>
                <div className="form-group">
                    <label>Username </label>
                    <input className="form-control"
                           name="username"
                           ref={register({
                               validate: value => value !== "admin" || "Nice try!"
                           })}
                    />
                    {errors.username && errors.username.message}
                </div>
                <div className="form-group">
                    <label htmlFor="text-area">Your comment</label>
                    <textarea className="form-control" id="text-area"
                              name="comment"
                              ref={register({
                                  required: "Required",
                              })}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Gửi bình luận</button>
            </form>

        </>
    )
}
