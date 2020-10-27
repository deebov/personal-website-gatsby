/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { Text } from "@theme-ui/components";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useCountry = () => {
  const [country, setCountry] = useState("US");

  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios(
        "https://api.ipfind.com/me?auth=854a8a15-10e1-430a-8c17-7b169268ff21"
      );

      setCountry(res.data.country_code);
      localStorage.setItem("country", res.data.country_code);
    };
    if (!localStorage.getItem("country")) {
      fetchInfo();
    } else {
      setCountry(localStorage.getItem("country"));
    }
  }, []);

  return country;
};

const greetingStrings = {
  RU: "Привет.",
  KZ: "Сәлем.",
  FR: "Salut.",
  SP: "Hola.",
};

const useIntlGreeting = () => {
  const country = useCountry();

  return greetingStrings[country];
};

const containerVariants = {
  before: { transition: { staggerChildren: 0.08 } },
  after: { transition: { staggerChildren: 0.08 } },
};

const letterVariants = {
  before: {
    opacity: 0,
    scale: 1.5,
    transition: {
      ease: [0.32, 0, 0.67, 0],
      delay: 0.07,
    },
  },
  after: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

const textStyle = {
  fontWeight: "bold",
  position: "absolute",
  letterSpacing: "-0.04em",
  fontSize: "3rem",
  color: "#09f",
  display: "flex",
  justifyContent: "center",
  top: "40px",
};

const HeaderTitle = () => {
  const greetingText = useIntlGreeting();
  const defaultGreetingText = "Hi.".split("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", height: "120px" }}>
      {greetingText && (
        <motion.div
          center={"y"}
          height={26}
          width={"100%"}
          background={""}
          style={textStyle}
          variants={containerVariants}
          // initial={"before"}
          animate={visible ? "after" : "before"}
        >
          {greetingText.split("").map((letter, index) => (
            <motion.div
              key={index}
              width={"auto"} // Set the width to the width of the letter
              height={26} // Set the height to the height of the text
              background={""}
              style={{ position: "relative", paddingRight: "5px" }} // Position elements
              variants={letterVariants}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.div>
          ))}
        </motion.div>
      )}
      <motion.div
        center={"y"}
        height={26}
        width={"100%"}
        background={""}
        style={textStyle}
        variants={containerVariants}
        // initial={"after"}
        animate={!greetingText || !visible ? "after" : "before"}
      >
        {defaultGreetingText.map((letter, index) => (
          <motion.div
            key={index}
            width={"auto"} // Set the width to the width of the letter
            height={26} // Set the height to the height of the text
            background={""}
            style={{ position: "relative", paddingRight: "5px" }} // Position elements
            variants={letterVariants}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeaderTitle;
