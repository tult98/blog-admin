import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  name: string;
  value: string;
  onChange: ({ target }: { target: { name: string; value: string } }) => void;
  onUpload: () => void;
}

const Editor = ({ name, value, onChange, onUpload }: Props) => {
  const [toolBarHeight, setToolbarHeight] = useState<number>(66);

  const modules = useMemo(() => {
    return {
      toolbar: {
        handlers: {
          image: () => {
            onUpload();
          },
        },
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      },
    };
  }, []);

  useEffect(() => {
    const toolBar = document.getElementsByClassName("ql-toolbar ql-snow")[0];
    if (toolBar) {
      setToolbarHeight(toolBar.clientHeight);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "300px",
        display: "flex",
        paddingBottom: `${toolBarHeight}px`,
      }}
    >
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        bounds={"#parent"}
        onChange={(content, event, editor) => {
          onChange({ target: { name, value: content } });
        }}
      />
    </div>
  );
};

export default Editor;
