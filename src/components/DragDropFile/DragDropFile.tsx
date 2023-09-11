import { useState, useRef } from "react";
import "./DragDropFile.css";

export default function DragDropFile() {
  const [theFiles, setTheFiles] = useState(null);

  const handleDragOver = (event: e) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event: e) => {
    event.preventDefault();
    setTheFiles(event.dataTransfer.files);
    console.log("File Uploaded!");
  };

  // Add server upload logic
  const handleUpload = () => {};

  const inputRef = useRef();

  return (
    <div
      className="drag-drop-wrapper"
      onClick={(e) => {
        e.preventDefault();
        console.log("clicked!");
      }}
      // onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div>
        <div>+</div>
        <p>
          <input
            type="file"
            multiple
            hidden
            onChange={(event) => {
              setTheFiles(() => {
                return {
                  files: event.target.files,
                };
              });
            }}
            ref={inputRef}
          />
          Drop your images here, or{" "}
          <span
            className="click-to-browse"
            onClick={() => {
              inputRef?.current.click();
            }}
          >
            click to browse
          </span>
          <br></br>
          1600 x 1200 (4:3) recommended, up to 10MB each.
        </p>
      </div>
    </div>
  );
}
