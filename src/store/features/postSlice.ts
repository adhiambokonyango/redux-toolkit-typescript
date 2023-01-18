import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostState {
    posts: Post[];
}

const initialState: PostState ={
    posts: []
}

export const fetchPosts = createAsyncThunk(
    "post/fetch",
    async (thunkAPI) =>{
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "GET"
                }
            )
            const data = response.json()
            return data
        }catch (e) {
            console.log(e)
        }
    })


export const savePost = createAsyncThunk(
    "person/save",
    async (post: Post, thunkAPI) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post,
            }),
        });
        const data = await response.json();
        return data;
    },
);

const PostSlice = createSlice({
    name:"POST",
    initialState,
    reducers: {
        logg: (state, action:PayloadAction<{logs: string}>)=>{
            console.log("logs")
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.posts = action.payload;
        });
        builder.addCase(savePost.fulfilled, (state, action) => {
            state.posts.push(action.payload);
        });
    }
})

export default PostSlice;
export const {}=PostSlice.actions;