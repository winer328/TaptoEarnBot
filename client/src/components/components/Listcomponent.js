import React, { useState } from "react";

const ListComponent = ({ refIcon, listContent }) => {
  // const [listContent, setListContent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  console.log({ listContent });
  const handleRefresh = () => {
    setRefreshing(true);

    // Simulate fetching new list content
    setTimeout(() => {
      // setListContent([...new Array(5).fill("New Item")]);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <div>
      <div className="invite-friendlist">
        <div className="invite-friendlist-title">
          <div className="invite-friendlist-title-text">
            List of your friends
          </div>
          <div
            className="invite-friendlist-title-icon"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            {refreshing ? "..." : refIcon}
          </div>
        </div>
        <div className={`invite-friendlist-list `}>
          {refreshing
            ? "Refreshing..."
            : listContent.length
            ? listContent.map((item, index) => <div key={index}>{item}</div>)
            : "No Friends!"}
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
