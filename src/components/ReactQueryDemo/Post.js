import { useQuery } from "react-query";
import React from "react";
import axios from "axios";

const getPostById = async (id) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
};

function usePost(postId) {
    return useQuery(["post", postId], () => getPostById(postId), {
        enabled: !!postId,
    });
}

function Post({ postId, setPostId }) {
    const { status, data, error, isFetching } = usePost(postId);

    return (
        <div>
            <div>
                <a onClick={() => setPostId(-1)} href="#">
                    Back
                </a>
            </div>
            {!postId || status === "loading" ? (
                "Loading..."
            ) : status === "error" ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <h1>{data.title}</h1>
                    <div>
                        <p>{data.body}</p>
                    </div>
                    <div>{isFetching ? "Background Updating..." : " "}</div>
                </>
            )}
        </div>
    );
}

export default Post;
