import { ReactNode } from "react";
import type { NextPage } from "next";

type Props = {
    children?: ReactNode;
};

const Paragraph: NextPage<Props> = ({ children }) => {
    return <p className="text-xl indent-4">{ children }</p>;
}

export default Paragraph;

