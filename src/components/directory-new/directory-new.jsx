import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryNewSections } from "../../redux/directory-new/directory-new.selectors";
import MenuNewItem from "../menu-new-item/menu-new-item";
import "../directory/directory.styles.scss";

const DirectoryNew = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuNewItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryNewSections,
});

export default connect(mapStateToProps)(DirectoryNew);
