import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import ReactDisqusComments from "react-disqus-comments";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  date: {
    fontSize: "16px",
    marginTop: theme.spacing(0.5)
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
    "& p, h1, h2, h3, h4": {
      whiteSpace: 'pre-wrap'
    }
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default ({ data }) => {
  const classes = useStyles();
  const post = data.markdownRemark;
  return (
    <Layout>
      <div style={{ paddingTop: "60px" }}>
        <Paper className={classes.root}>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={data.file.childImageSharp.resize.src}
                alt="Avatar"
                style={{
                  marginRight: "10px",
                  borderRadius: "5%"
                }}
              />
            </div>
            <div>
              <Typography
                variant="h4"
                component="h2"
                className={classes.blogTitle}
                gutterBottom
              >
                {post.frontmatter.title}
              </Typography>

              <Typography
                className={classes.date}
                color="textSecondary"
                gutterBottom
              >
                Chad Adams &#8226; {post.frontmatter.date} &#8226;{" "}
                {post.timeToRead} min read
              </Typography>

              <div>
                {post.frontmatter.tags.map((data, index) => {
                  return (
                    <Chip key={index} label={data} className={classes.chip} />
                  );
                })}
              </div>
            </div>
          </div>
          <hr />

          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Paper>

        <ReactDisqusComments
          shortname={data.site.siteMetadata.disqusShortname}
          identifier={post.id}
          title={post.frontmatter.title}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        tags
      }
      timeToRead
    }
    site {
      siteMetadata {
        disqusShortname
      }
    }

    file(relativePath: { eq: "data/images/avatar-square.png" }) {
      childImageSharp {
        resize(width: 64, toFormat: WEBP, quality: 75) {
          src
        }
      }
    }
  }
`;
