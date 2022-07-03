import type { NextPage } from "next";
import Draggable from "react-draggable";
import { RefObject } from "react";

type Props = {
    pos_x?: number;
    pos_y?: number;
    _ref?: RefObject<HTMLDivElement>;
    on_drag: any;
};

const Point: NextPage<Props> = ({ pos_x, pos_y, _ref, on_drag }) => {
    return (
      <Draggable nodeRef={_ref} onDrag={on_drag} defaultPosition={{x: pos_x ? pos_x : 0, y: pos_y ? pos_y : 0}}>
        <div ref={_ref} className="absolute w-0.5 p-2 rounded-full bg-amber-200">
        </div>
      </Draggable>
    );
}

export default Point;

