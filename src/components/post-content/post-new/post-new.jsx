import React from "react";
import "./post-new.styles.scss";
import firebase from "../../../firebase/firebase.utils";
import { Table } from "react-bootstrap";

function PostNewContent() {
  const [newcollections, setCollections] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const newcollections = await db.collection("newcollections").get();
      setCollections(
        newcollections.docs.map((doc) => {
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

  return newcollections.map((collection) =>
    collection.items.map((item) => (
      <Table striped bordered hover size="sm">
        <h2>{collection.title}</h2>
        <thead>
          <tr>
            <th>#</th>
            <th>Content</th>
            <th>Description</th>
            <th>imageUrl</th>
            <th>imageContent</th>
            <th>secondContent</th>
            <th>secondImageContent</th>
            <th>titles</th>
            <th>videolink</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.content}</td>
            <td>{item.description}</td>
            <td>
              {item.imageUrl}
              <div
                className="img"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
            </td>
            <td>
              {item.imagecontent}
              <div
                className="img"
                style={{ backgroundImage: `url(${item.imagecontent})` }}
              />
            </td>
            <td>{item.secondcontent}</td>
            <td>
              {item.secondimagecontent}
              <div
                className="img"
                style={{ backgroundImage: `url(${item.secondimagecontent})` }}
              />
            </td>
            <td>{item.titles}</td>
            <td>{item.videolink}</td>
          </tr>
        </tbody>
      </Table>
    ))
  );
}
export default PostNewContent;
