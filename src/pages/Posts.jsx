import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/page";
import "../styles/App.css";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
 
   

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const responce = await PostService.getAll(limit, page);
        setPosts(responce.data)
        const totalCount = responce.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    });

    console.log(totalPages)
    useEffect(() => {
        fetchPosts(limit, page);
    }, []);



    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && 
                <h1>Произошла ошибка{postError}</h1>}
            {isPostsLoading  
                ? (<div style={{display: "flex",justifyContent: "center",marginTop: 50}}><Loader/></div>)
                : (<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>)
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
}

export default Posts;
