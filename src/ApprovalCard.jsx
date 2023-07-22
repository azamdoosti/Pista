import React from "react";
import "semantic-ui-css/semantic.min.css";

const ApprovalCard = (props) => {
  console.log(props.children);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button class="ui green basic button">Approve</button>
          <button class="ui red basic button">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
