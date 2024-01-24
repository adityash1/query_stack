"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import parse from "html-react-parser";

interface Props {
  data: string;
}

const ParseHTML = ({ data }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <>{parse(data)}</>;
};

export default ParseHTML;
