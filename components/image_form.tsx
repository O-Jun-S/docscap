import { useState, useRef } from "react";
import { RefObject } from "react";
import type { NextPage } from "next";
import Point from "./point.tsx";

type Rect = {
    left: number;
    top: number;
    right: number;
    bottom: number;
};

type setRect = (rect: Rect) => void;

const ImageForm: NextPage = () => {
    const [preview, setPreview] = useState("");
    const [is_uploaded, setIsUploaded] = useState(false);

    const [point1Rect, setPoint1Rect] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
    const point1Ref = useRef<HTMLDivElement>(null!);
    const [point2Rect, setPoint2Rect] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
    const point2Ref = useRef<HTMLDivElement>(null!);
    const [point3Rect, setPoint3Rect] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
    const point3Ref = useRef<HTMLDivElement>(null!);
    const [point4Rect, setPoint4Rect] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
    const point4Ref = useRef<HTMLDivElement>(null!);

    const handleChangeFile = (e: any) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
        setIsUploaded(true);
    };

    const onDrag = (pointRef: RefObject<HTMLDivElement>, setPointRect: setRect) => () => {
        const point = pointRef.current;
        if(!point) return;
        const { left, top, right, bottom } = point.getBoundingClientRect();
        setPointRect({ left, top, right, bottom });
        console.log("left: " + left + ", top: " + top + ", right: " + right + ", bottom: " + bottom);
    };

    return (
      <div className="m-6">
        <img src={preview} />
        <input
          type="file"
          name="photo"
          onChange={handleChangeFile}
        />
        {is_uploaded && (
            <>
              <Point pos_x={10} pos_y={10} _ref={point1Ref} on_drag={onDrag(point1Ref, setPoint1Rect)}/>
              <Point pos_x={50} pos_y={10} _ref={point2Ref} on_drag={onDrag(point2Ref, setPoint2Rect)}/>
              <Point pos_x={10} pos_y={50} _ref={point3Ref} on_drag={onDrag(point3Ref, setPoint3Rect)}/>
              <Point pos_x={50} pos_y={50} _ref={point4Ref} on_drag={onDrag(point4Ref, setPoint4Rect)}/>
            </>
        )}
      </div>
    );
}

export default ImageForm;

