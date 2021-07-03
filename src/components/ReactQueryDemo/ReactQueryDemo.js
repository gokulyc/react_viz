import { useQuery } from "react-query";

const getRepoData = () => {
    return fetch("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.json())
        .catch(console.log("Net Err"));
};

function Example() {
    const{ isLoading, error, data, isFetching } = useQuery("repoData", () =>
        getRepoData().then()
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{" "}
            <strong>✨ {data.stargazers_count}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    );
}

export default Example;
