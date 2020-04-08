import React, { useEffect, useState } from "react";
import "./Countries.css";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function Countries() {
  const [country, setcountry] = useState([]);

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all").then(response =>
      setcountry(response.data)
    );
  }, []);

  function update() {
    document.querySelectorAll("button").forEach(element => {
      let val = new RegExp(
        document.getElementById("outlined-basic").value,
        "i"
      );
      if (!element.innerText.match(val)) {
        element.style.display = "none";
        element.parentElement.style.marginTop = "0";
      } else {
        element.style.display = "";
        element.parentElement.style.marginTop = "5%";
      }
    });
  }
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "6%"
    }
  });
  const classes = useStyles();

  return (
    <div className="Countries">
      <br />
      <h1>Country List</h1>
      <TextField
        id="outlined-basic"
        color={"secondary"}
        label="Search countries"
        variant="outlined"
        onChange={update}
      />
      {country.map(country => (
        <Card key={country.numericCode} className={classes.root}>
          <CardActionArea className="Item">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              width="400"
              image={country.flag}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {country.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Countries;
