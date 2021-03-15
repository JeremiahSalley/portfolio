import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import nbaGraph from "../nbaGraph.png";
import popcornTime from "../popcornTime.png";
import contactBook from "../contactBook.png";
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import './project.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const projectList = [
  {
    id: 1,
    image: popcornTime,
    title: "PopCorn Time",
    desc: "Netflix clone created with React and firebase as the backend",
    repositories: "https://github.com/JeremiahSalley/popcorntime",
    deploy: "https://popcorntime-55ab1.web.app/",
  },
  {
    id: 2,
    image: nbaGraph,
    title: "Nba Graph",
    desc:
      "Nba Graph compares two players stats from the current Nba season",
    repositories: "https://github.com/JeremiahSalley/Nba-graph2",
    deploy: "https://github.com/JeremiahSalley/Nba-graph2",
  },
  {
    id: 3,
    image: contactBook,
    title: "Contact Book",
    desc:
      "A command line application that allows the user to read, create, and search for contact.",
    repositories: "https://github.com/JeremiahSalley/Contact-book",
    deploy: "https://github.com/JeremiahSalley/Contact-book",
  },
];
// console.log(projectList[0].title);
function Projects() {
  const classes = useStyles();
  return (
    <div className="Container">
      <Grid
        container
        display="flexbox"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        {projectList.map((cardInfo, key) => (
          <div className="indiCard">
            <Card key={cardInfo.id}>
              <CardActionArea>
                <CardMedia
                  id="images"
                  className={classes.media}
                  image={cardInfo.image}
                />
                <CardContent>
                  <h1>{cardInfo.title}</h1>
                  <p2>{cardInfo.desc}</p2>
                </CardContent>
                <CardActions>
                  <Link href={cardInfo.deploy}>
                    <Button className="deployedLink">Deployed Site </Button>
                  </Link>
                  <Link href={cardInfo.repositories}>
                    <Button className="repositoriesLink">Github</Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
