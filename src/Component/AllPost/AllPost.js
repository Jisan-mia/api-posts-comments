import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import Post from "../Post/Post";
import "./AllPost.css";
const AllPost = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const [searchTerm] = useContext(SearchContext);

	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		const filterPost = posts.filter(
			(post) =>
				post.body.toUpperCase().includes(searchTerm.toUpperCase()) ||
				post.title.toUpperCase().includes(searchTerm.toUpperCase())
		);
		setSearchResult(filterPost);
		// console.log(filterPost);
	}, [searchTerm]);

	const loadData = async () => {
		const url = "https://jsonplaceholder.typicode.com/posts";
		const response = await axios.get(url);
		setPosts(response.data);
		setLoading(false);
	};

	return (
		<>
			<Container maxWidth="sm">
				{loading && <i style={{ marginTop: "20px" }}> Loading...</i>}
				{searchTerm
					? searchResult.map((post) => (
							<Post detailBtn={true} key={post.id} post={post}></Post>
					  ))
					: posts.map((post) => (
							<Post detailBtn={true} key={post.id} post={post}></Post>
					  ))}
			</Container>
		</>
	);
};

export default AllPost;
