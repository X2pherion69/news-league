import { createSelector } from "reselect";

export const selectNew = (state) => state.news;

export const selectCollections = createSelector(
  [selectNew],
  (news) => news.newcollections
);

export const selectNewCollectionsForPreview = createSelector(
  [selectCollections],
  (newcollections) =>
    newcollections
      ? Object.keys(newcollections).map((key) => newcollections[key])
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (newcollections) =>
    newcollections ? newcollections[collectionUrlParam] : null
  );

export const selectTournamentsItems = createSelector(
  [selectNew],
  (news) => news.newcollections.tournaments.items
);
export const selectVideosItems = createSelector(
  [selectNew],
  (news) => news.newcollections.videos.items
);

export const selectUpdatesItems = createSelector(
  [selectNew],
  (news) => news.newcollections.updates.items
);

export const totalSelectItems = createSelector(
  [selectTournamentsItems, selectVideosItems, selectVideosItems],
  (tournaments, updates, videos) => ({ tournaments, updates, videos })
);

export const selectItem = (itemId) =>
  createSelector(
    [selectTournamentsItems],
    (items) => handleSelectedItem(items, itemId)[0]
  );

var handleSelectedItem = (items, itemId) => {
  return items.filter((value) => value.id == itemId);
};
export const selectIsCollectionFetching = createSelector(
  [selectNew],
  (news) => news.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectNew],
  (news) => !!news.newcollections
);
