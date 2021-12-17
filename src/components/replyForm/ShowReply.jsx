import React, { useState } from "react";
const ShowReplies = ({ allReplies }) => {
  const [replies, setReplies] = useState(false);
  return (
    <>
      {allReplies.length > 0 ? (
        replies && (
          <div className="w-100 my-4">
            {allReplies.map((reply, index) => (
              <div
                key={index * 45464213}
                className="w-100 border card px-5 py-2 my-2"
              >
                <div className="d-flex">
                  <p className="my-0 text-capitalize text-white bg-dark py-2 me-4 px-3 rounded-circle">
                    {reply.name[0]}
                  </p>
                  <div>
                    <p className="my-0 card-title">{reply.name}</p>
                    <p className="my-0 card-text">{reply.email}</p>
                  </div>
                </div>
                <div className="d-flex gap-1 align-items-center justify-content-end">
                  {reply.admin && (
                    <p className="bg-dark text-white py-1 px-2">Admin</p>
                  )}
                </div>
                <p className="mt-4">{reply.reply}</p>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="w-100 my-4">
          <p className="text-center my-0">No Comment Reply!</p>
        </div>
      )}
      {allReplies.length > 0 && (
        <button
          className="btn text-primary mt-4"
          onClick={() => setReplies((prevReplies) => !prevReplies)}
        >
          {replies ? "Hide" : "View"} {allReplies.length} reply(s)
        </button>
      )}
    </>
  );
};
export default ShowReplies;
