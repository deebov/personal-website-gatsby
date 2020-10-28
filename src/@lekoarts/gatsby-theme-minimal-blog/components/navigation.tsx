/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Link as TLink } from "@theme-ui/components";
import { Link } from "gatsby";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";

type NavigationProps = {
  nav: {
    title: string;
    slug: string;
    isExternal: boolean;
  }[];
};

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig();
  console.log(nav);

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav
          sx={{
            "a:not(:last-of-type)": { mr: 3 },
            fontSize: [1, `18px`],
            ".active": { color: `heading` },
          }}
        >
          {nav.map((item) =>
            item.isExternal ? (
              <TLink key={item.slug} href={item.slug} target="_blank">
                {item.title}
              </TLink>
            ) : (
              <TLink
                key={item.slug}
                as={Link}
                activeClassName="active"
                to={replaceSlashes(`/${basePath}/${item.slug}`)}
              >
                {item.title}
              </TLink>
            )
          )}
        </nav>
      )}
    </React.Fragment>
  );
};

export default Navigation;
