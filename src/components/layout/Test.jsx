import React from "react";
import {useDispatch, useSelector} from "react-redux";
export default function Test() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <h1>{counter}</h1>
             <button onClick={()=> dispatch({type : "INCREMENT" }) }> ++ </button>
             <button onClick={()=> dispatch({type : "DECREMENT" }) }> -- </button>
        </>
    )
}
