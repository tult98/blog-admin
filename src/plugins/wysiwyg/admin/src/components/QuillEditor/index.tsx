import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  name: string;
  value: string;
  onChange: ({ target }: { target: { name: string; value: string } }) => void;
  onUpload: () => void;
}

const Editor = ({ name, value, onChange, onUpload }: Props) => {
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
