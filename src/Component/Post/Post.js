import { Button, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { blue } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 450,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: blue[500],
	},
}));

export default function Post({ post, detailBtn }) {
	const [loved, setLoved] = useState(false);
	const { title, body, id } = post;
	// console.log(post);

	const capitalizeString = (string) => {
		const splitString = string.split(" ");

		for (let i = 0; i < splitString.length; i++) {
			splitString[i] =
				splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
		}

		// console.log(splitString.join(" "));
		return splitString.join(" ");
	};

	const randomDate = (date1, date2) => {
		const randomValueMinMax = (min, max) => {
			return Math.random() * (max - min) + min;
		};
		date1 = date1 || "01-01-1970";

		date2 = date2 || new Date().toLocaleDateString();
		date1 = new Date(date1).getTime();
		date2 = new Date(date2).getTime();

		if (date1 > date2) {
			return new Date(randomValueMinMax(date2, date1)).toLocaleDateString();
		} else {
			return new Date(randomValueMinMax(date1, date2)).toLocaleDateString();
		}
	};

	let history = useHistory();
	const handleDetailButton = (id) => {
		const url = `/posts/${id}`;
		history.push(url);
	};

	const handleBackButton = () => {
		history.push("/");
	};

	const classes = useStyles();

	return (
		<>
			<Grid container justify="center" style={{ paddingTop: "20px" }}>
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label="recipe" className={classes.avatar}>
								{title.charAt(0).toUpperCase()}
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={capitalizeString(title.slice(0, 23))}
						subheader={randomDate("12/13/2020", new Date())}
					/>
					{/* 
					<CardMedia
						className={classes.media}
						image="/static/images/cards/paella.jpg"
						title="Post image"
					/> */}
					<CardContent>
						<Typography color="textSecondary" component="p">
							{body}...
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<Grid container justify="space-between" alignItems="center">
							<Grid item>
								<IconButton aria-label="add to favorites">
									<FavoriteIcon
										onClick={() => setLoved(!loved)}
										color={loved ? "secondary" : ""}
									/>
								</IconButton>
							</Grid>
							<Grid item>
								{detailBtn ? (
									<Button
										onClick={() => handleDetailButton(id)}
										size="small"
										variant="contained"
										color="primary"
									>
										Detail
									</Button>
								) : (
									<Button
										onClick={() => handleBackButton()}
										size="small"
										variant="contained"
										color="primary"
									>
										Back
									</Button>
								)}
							</Grid>
						</Grid>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
}
