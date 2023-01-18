import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Add from "./component/Add";
import List from "./component/List";
import {useAppDispatch} from "./store/store";
import {fetchPosts} from "./store/features/postSlice";
import AddPost from "./component/AddPost";
import ListPosts from "./component/ListPosts";

function App() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    })
  return (
    <>
      <Add/>
      <List/>
        {/*<AddPost/>*/}
        <ListPosts/>
    </>
  );
}

export default App;
