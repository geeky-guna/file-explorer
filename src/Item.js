import React, { useState } from "react";

export default function Item({ data }) {
  const [expand, setExpand] = useState(false);

  return data.type === "folder" ? (
    <div>
      <div>
        <span onClick={() => setExpand(!expand)}>
          <img
            src={
              expand
                ? require("./svgs/folder-open-svgrepo-com.svg").default
                : require("./svgs/folder-svgrepo-com.svg").default
            }
            alt="file-svg"
            height={25}
          />
          {data.name}
        </span>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {data.children?.map(item => {
          return <Item data={item} />;
        })}
      </div>
    </div>
  ) : (
    <div>
      <span>
        <img
          src={require("./svgs/file-svgrepo-com.svg").default}
          alt="file-svg"
          height={25}
        />
        {data.name}
      </span>
    </div>
  );
}
