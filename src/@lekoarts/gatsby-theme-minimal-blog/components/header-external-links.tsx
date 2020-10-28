/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Link as TLink } from "@theme-ui/components";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <TLink target="_blank" key={link.url} href={link.url}>
              {link.name}
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default HeaderExternalLinks;
