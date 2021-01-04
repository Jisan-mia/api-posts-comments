import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: green[500],
	},
}));

const Comment = ({ comment }) => {
	const classes = useStyles();
	const { id, name, email, body } = comment;

	const capitalizeString = (string) => {
		const splitString = string.split(" ");
		for (let i = 0; i < splitString.length; i++) {
			splitString[i] =
				splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
		}

		return splitString.join(" ");
	};

	const randomNum = (min, max) => {
		return Math.floor(Math.random() * max - min + min);
	};

	return (
		<Card
			style={{
				maxWidth: "450px",
				width: "450px",
				marginTop: "10px",
			}}
		>
			<CardHeader
				style={{ padding: "8px 16px " }}
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{name.charAt(0).toUpperCase()}
					</Avatar>
				}
				title={capitalizeString(name.slice(0, 20))}
				subheader={randomNum(3, 20) + " minutes ago"}
			/>
			<CardContent style={{ padding: "0px 16px 10px 16px" }}>
				<Typography variant="body2" color="textSecondary" component="p">
					{body.slice(0, 80)}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Comment;
