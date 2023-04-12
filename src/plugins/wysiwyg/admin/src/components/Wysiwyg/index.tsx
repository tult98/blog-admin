import { Field, FieldLabel, Flex, Stack } from "@strapi/design-system";
import { prefixFileUrlWithBackendUrl, useLibrary } from "@strapi/helper-plugin";
import React, { useState } from "react";
import Editor from "../QuillEditor";

export interface Props {
  name: string;
  value: string;
  onChange: ({ target }: { target: { name: string; value: string } }) => void;
  onUpload: () => void;
}

const Wysiwyg = ({ name, onChange, value }: Props) => {
  const [showMediaLibDialog, setShowMediaLibDialog] = useState(false);
  const { components } = useLibrary();
  const MediaLibDialog = components["media-library"];

  const handleToggleMediaLibDialog = () => {
    setShowMediaLibDialog(!showMediaLibDialog);
  };

  const handleSelectAssets = (files: any[]) => {
    const formattedFiles = files.map((file) => ({
      alt: file.alternativeText || file.name,
      url: prefixFileUrlWithBackendUrl(file.url),
      mime: file.mime,
    }));
    const images = formattedFiles
      .map((image) => `<image src='${image.url}' alt='${image.alt}'>`)
      .join();
    onChange({
      target: {
        name: name,
        value: value + images,
      },
    });
    handleToggleMediaLibDialog();
  };

  return (
    <div>
      <Field name={name}>
        <Stack size={2} padding={2}>
          <Flex>
            <FieldLabel>{name}</FieldLabel>
          </Flex>
          <Editor
            name={name}
            value={value}
            onChange={onChange}
            onUpload={handleToggleMediaLibDialog}
          />
        </Stack>
        {showMediaLibDialog && (
          <MediaLibDialog
            onClose={handleToggleMediaLibDialog}
            onSelectAssets={handleSelectAssets}
          />
        )}
      </Field>
    </div>
  );
};
export default Wysiwyg;
