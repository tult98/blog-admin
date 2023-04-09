import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt";
import { FormatBold } from "@styled-icons/material/FormatBold";
import { FormatItalic } from "@styled-icons/material/FormatItalic";
import { FormatStrikethrough } from "@styled-icons/material/FormatStrikethrough";
import { FormatUnderlined } from "@styled-icons/material/FormatUnderlined";
import {
  getPluginType,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  MarkToolbarButton,
} from "@udecode/plate";
import React from "react";
import { useMyPlateEditorRef } from "../typescript/plateTypes";

const tooltip = (content: string) => ({
  content,
});

export const BasicMarkToolbarButtons = () => {
  const editor = useMyPlateEditorRef();

  return (
    <>
      <MarkToolbarButton
        tooltip={tooltip("Bold (⌘+B)")}
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        tooltip={tooltip("Italic (⌘+I)")}
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        tooltip={tooltip("Underline (⌘+U)")}
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton
        tooltip={tooltip("Strikethrough (⌘+⇧+M)")}
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        tooltip={tooltip("Code (⌘+E)")}
        type={getPluginType(editor, MARK_CODE)}
        icon={<CodeAlt />}
      />
    </>
  );
};
