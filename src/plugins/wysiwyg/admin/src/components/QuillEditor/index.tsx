import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Props } from "../Wysiwyg";
import "./editor.css";

const Editor = ({ name, value, onChange, onUpload }: Props) => {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          ["clean"],
        ],
        handlers: {
          image: () => {
            onUpload();
          },
        },
      },
    };
  }, []);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={(content, event, editor) => {
        onChange({ target: { name, value: content } });
      }}
    />
  );
};
export default Editor;
