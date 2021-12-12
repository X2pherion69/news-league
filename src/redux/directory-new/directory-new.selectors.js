import { createSelector } from "reselect";

const selectDirectoryNew = (state) => state.directoryNew;

export const selectDirectoryNewSections = createSelector(
  [selectDirectoryNew],
  (directoryNew) => directoryNew.sections
);
