import { useState } from "react";
import type { NextPage } from "next";

const ImageForm: NextPage = () => {
    const [preview, setPreview] = useState("");

    const handleChangeFile = (e: any) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };

    return (
      <div className="m-6">
        <img src={preview} />
        <input
          type="file"
          name="photo"
          onChange={handleChangeFile}
        />
      </div>
    );
}

export default ImageForm;

