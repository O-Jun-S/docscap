import type { NextPage } from "next";
import Draggable from "react-draggable";

type Props = {
  pos_x?: number;
  pos_y?: number;
};

const Point: NextPage<Props> = ({ pos_x, pos_y }) => {
    return (
      <Draggable defaultPosition={{x: pos_x ? pos_x : 0, y: pos_y ? pos_y : 0}}>
        <div className="absolute w-0.5 p-2 rounded-full bg-amber-200">
        </div>
      </Draggable>
    );
}

export default Point;

