import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { setVideo } from "../../../slice/videoSlice";
import { useDispatch } from "react-redux";

function MyDropzone() {
  const [file, setfile] = useState("");
  const dispatch = useDispatch();
  const onDrop = useCallback((acceptedFiles) => {
    setfile(...acceptedFiles.map((file) => URL.createObjectURL(file)));
    dispatch(setVideo(acceptedFiles[0]));
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    rejectedFiles,
  } = useDropzone({
    onDrop,
    accept: {
      "video/*": [],
    },
    maxSize: 1024 * 1024 * 10,
    maxFiles: 1,
  });

  return (
    <>
      {file ? (
        <Video file={file} setfile={setfile} />
      ) : (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="w-[150px] border">Hello</div>
          ) : (
            <div className="w-[150px] border h-[50px] border-gray-500 border-dashed border-spacing-3 flex items-center justify-center rounded-md">
              <AiOutlinePlus />
              <p className="pl-2 text-[12px]">drop short video</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function Video({ file, setfile }) {
  return (
    <div className="relative h-[50px] w-[150px]">
      {file ? <video src={file} className="h-[50px] w-[120px]" controls /> : ""}
      <button
        className="absolute top-0 right-3 z-10"
        onClick={() => setfile("")}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default MyDropzone;
