import {useAppSelector} from "../store/store";

const ListPosts = () =>{
    const posts = useAppSelector(state => state.post.posts)
    console.log(posts)
    return(
        <>
            <ul>
                {
                    posts.map(post => (
                        <ul key ={post.id}>
                            <ul>{post.title}</ul>
                            <ul>{post.body}</ul>
                        </ul>
                    ))
                }
            </ul>
        </>
    )
}

export default ListPosts;