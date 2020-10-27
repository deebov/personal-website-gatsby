/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Box, Link as TLink } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import { FiExternalLink } from "react-icons/fi";

type BlogListItemProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  };
  showTags?: boolean;
};

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => {
  console.log(post.slug);

  return (
    <Box mb={4}>
      {post.slug.startsWith("/http") ? (
        <TLink
          target="_blank"
          href={post.slug.split(":/").join("://").substr(1)}
          sx={{
            fontSize: [1, 2, 3],
            color: `text`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {post.title} <FiExternalLink style={{ marginLeft: "6px" }} />
        </TLink>
      ) : (
        <TLink
          as={Link}
          to={post.slug}
          sx={{ fontSize: [1, 2, 3], color: `text` }}
        >
          {post.title}
        </TLink>
      )}

      <p
        sx={{
          color: `secondary`,
          mt: 1,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        {post.tags && showTags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
      </p>
    </Box>
  );
};

export default BlogListItem;