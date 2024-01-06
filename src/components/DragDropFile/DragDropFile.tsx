import { useState, DragEvent } from "react";
import "./DragDropFile.css";

type DragProps = {
  name: string;
};

export default function DragDropFile(props: DragProps) {
  const [theFiles, setTheFiles] = useState<FileList | undefined>();

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("Dragging over!");
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setTheFiles(event.dataTransfer.files);
    console.log("File Uploaded!");
    console.log("UPLOADED FILE: ", event.dataTransfer.files);
  };

  const getFileNames = (fileList: FileList): string => {
    let nameList = [];
    for (const file of fileList) {
      nameList.push(file.name);
    }
    return nameList.join(", \n");
  };

  // vvv Add server upload logic here when backend is built vvv
  // const handleUpload = () => {};

  return (
    <div
      className="drag-drop-wrapper"
      onClick={(e) => {
        e.preventDefault();
        console.log("clicked!");
      }}
      onDragOver={(e) => {
        handleDragOver(e);
      }}
      onDrop={handleDrop}
    >
      {!theFiles && (
        <div>
          <div className="plus-icon-upload">+</div>
          <p>
            <input type="file" multiple hidden />
            {`Drop your ${props.name} here, or`}
            <span className="click-to-browse"> click to browse</span>
            <br></br>
            1600 x 1200 (4:3) recommended, up to 10MB each.
          </p>
        </div>
      )}

      {theFiles && (
        <>
          <strong>Selected {props.name}:</strong>
          {getFileNames(theFiles)}
        </>
      )}
    </div>
  );
}
