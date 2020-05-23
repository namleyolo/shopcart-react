import React, {useEffect, useState} from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";

import {api, apiGetProduct} from "../../../config/api";
import {useDispatch, useSelector} from "react-redux";

export default function ProductDetail(props) {
    const getIdParam = props.match.params.id
    const [ data, setData ] = useState({})
    const [ comments, setComments ] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(api+ "product/" + `${getIdParam}` ,
            ).catch(err => {
                console.log(err)
            });
            const getComments = await axios.get(apiGetProduct + "/" + `${getIdParam}` ,
            ).catch(err => {
                console.log(err)
            });
            // console.log(getComments.data)
            setLoading(false)
            setData(result.data.data)
            setComments(getComments.data.data)

        };
        fetchData();
    }, []);

    const convertUrlImage = (imageUrl) => {
        if (imageUrl) {
            return imageUrl.replace("uploads/","")
        }
    }
    const { handleSubmit, register, errors , reset } = useForm();
    const onSubmit = values => {
        console.log(values);

    };

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={()=> dispatch({type : "INCREMENT" }) }> ++ </button>
            <button onClick={()=> dispatch({type : "DECREMENT" }) }> -- </button>
            <div className="container">
                {isLoading && <pre>LOADING...</pre>}
                <p>{data.details}</p>
                <p>{data.name}</p>
                <figure>
                    <img src={ api + convertUrlImage(data.image)} alt="est"></img>
                </figure>
                <h3>Comments::</h3>
                {comments.map(value => (
                    <p> {value.content} </p>
                ) )}

                <form onSubmit={handleSubmit(onSubmit)}>
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
            </div>

        </>
    )
}
