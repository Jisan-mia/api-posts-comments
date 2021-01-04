import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
import Post from "../Post/Post";

export default function Detail() {
	const { id } = useParams();
	const [post, setPost] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		loadData();
		loadComments();
	}, []);

	const loadComments = async () => {
		const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
		const response = await axios.get(url);
		// console.log(response.data);
		setComments(response.data);
	};

	const loadData = async () => {
		const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
		const response = await axios.get(url);
		// console.log(response.data);
		setPost(response.data);
		setLoaded(true);
	};
	// console.log(post);

	return (
		<Container maxWidth="sm">
			<Grid container justify="center" style={{ padding: "20px 0" }}>
				{loaded ? (
					<>
						<Post detailBtn={false} post={post}></Post>

						{comments.map((comment) => (
							<Comment key={comment.id} comment={comment}></Comment>
						))}
					</>
				) : (
					"loading.."
				)}
			</Grid>
		</Container>
	);
}
