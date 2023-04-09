import { Link } from "@styled-icons/material/Link";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_PARAGRAPH,
  LinkToolbarButton,
  Plate,
  PlateProvider,
  createAlignPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createExitBreakPlugin,
  createIndentPlugin,
  createLinkPlugin,
  createListPlugin,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createTablePlugin,
  createTodoListPlugin,
} from "@udecode/plate";
import React from "react";
import { AlignToolbarButtons } from "./align/AlignToolbarButtons";
import { MarkBalloonToolbar } from "./balloon-toolbar/MarkBalloonToolbar";
import { BasicElementToolbarButtons } from "./basic-elements/BasicElementToolbarButtons";
import { BasicMarkToolbarButtons } from "./basic-marks/BasicMarkToolbarButtons";
import { editableProps } from "./common/editableProps";
import { plateUI } from "./common/plateUI";
import "./editor.css";
import { IndentToolbarButtons } from "./indent/IndentToolbarButtons";
import { indentPlugin } from "./indent/indentPlugin";
import { linkPlugin } from "./link/linkPlugin";
import { ListToolbarButtons } from "./list/ListToolbarButtons";
import { TableToolbarButtons } from "./table/TableToolbarButtons";
import { Toolbar } from "./toolbar/Toolbar";
import {
  MyPlatePlugin,
  MyValue,
  createMyPlugins,
} from "./typescript/plateTypes";

const plugins: MyPlatePlugin[] = createMyPlugins(
  [
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),
    createResetNodePlugin(),
    createSoftBreakPlugin(),
    createExitBreakPlugin(),
    createIndentPlugin(indentPlugin),
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_H4,
            ELEMENT_H5,
            ELEMENT_H6,
          ],
        },
      },
    }),
    createListPlugin(),
    createTodoListPlugin(),
    createLinkPlugin(linkPlugin),
    createTablePlugin({
      options: {
        initialTableWidth: 600,
        // disableMarginLeft: true,
      },
    }),
  ],
  {
    components: plateUI,
  }
);

const PlateEditor = () => {
  return (
    <PlateProvider plugins={plugins}>
      <Toolbar>
        <BasicElementToolbarButtons />
        <BasicMarkToolbarButtons />
        <AlignToolbarButtons />
        <ListToolbarButtons />
        <LinkToolbarButton icon={<Link />} />
        <IndentToolbarButtons />
        <TableToolbarButtons />
      </Toolbar>
      <Plate<MyValue> editableProps={editableProps}>
        <MarkBalloonToolbar />
      </Plate>
    </PlateProvider>
  );
};

export default PlateEditor;
