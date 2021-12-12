import React from "react";
import "./post-shop.styles.scss";
import firebase from "../../../firebase/firebase.utils";
import { Table } from "react-bootstrap";
function PostShopContent() {
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const collections = await db.collection("collections").get();
      setCollections(
        collections.docs.map((doc) => {
          const { title, items } = doc.data();
          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
          };
        })
      );
    };
    fetchData();
  }, []);
  return collections.map((collection) =>
    collection.items.map((item) => (
      <Table striped bordered hover size="sm">
        <h2>{collection.title}</h2>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>imageUrl</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              {item.imageUrl}
              <div
                className="img"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    ))
  );
}
export default PostShopContent;
