import React from "react";
import News_Data from "./news.data";
import CollectionPreview from "../../components/preview-collection/collection-preview";

class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: News_Data,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="new-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default NewsPage;
