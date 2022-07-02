import { useState } from "react";
import type { NextPage } from "next";
import Point from "./point";

const ImageForm: NextPage = () => {
    const [preview, setPreview] = useState("");
    const [is_uploaded, setIsUploaded] = useState(false);

    const handleChangeFile = (e: any) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
        setIsUploaded(true);
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
              <Point pos_x={10} pos_y={10}/>
              <Point pos_x={50} pos_y={10}/>
              <Point pos_x={10} pos_y={50}/>
              <Point pos_x={50} pos_y={50}/>
            </>
        )}
      </div>
    );
}

export default ImageForm;

