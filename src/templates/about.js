import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2)
  },
  content: {
    fontSize: "20px",
    "& img": {
      maxWidth: "100%"
    },
    "& a": {
      color: "#337ab7",
      textDecoration: "none",
      "&:hover": {
        color: "#23527c",
        textDecoration: "underline"
      }
    },
    "& h1": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    "& h2": {
      marginBottom: '0px'
    },
    "& p": {
      marginTop: '0px'
    }
  },
}));

export default ({ data }) => {
  const classes = useStyles();
  const post = data.markdownRemark;
  return (
    <Layout>
      <Paper className={classes.root}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Paper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
    }
  }
`;