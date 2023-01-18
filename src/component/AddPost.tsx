// @flow
import * as React from 'react';
import {useRef} from "react";
import {useAppDispatch} from "../store/store";
import {ADD_PERSON} from "../store/features/personSlice";
import App from "../App";
import {savePost} from "../store/features/postSlice";

type Props = {

};
const Add = () => {
    const name = useRef<string>("")
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="border rounded-md p-2 shadow-md m-2">
                <label>posts</label><br/><br/>
                <input
                    className="border rounded-md p-2 mx-2"
                    onChange={(event)=>name.current = event.target.value}
                /><br/><br/>
                <button
                    onClick={() => dispatch(savePost({body: "", id: 0, title: "", userId: 0}))}
                    className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700">Add</button>
            </div><br/><br/>
        </>
    );
};

export default Add;