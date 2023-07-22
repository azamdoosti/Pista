import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import { faker } from "@faker-js/faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import "semantic-ui-css/semantic.min.css";
function Comment() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          time="Today at 4 PM"
          content="I will be successful"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Ali"
          time="Sunday at 4 PM"
          content="Today is hot"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="John"
          time="Saturday at 4 PM"
          content="I am and will be happy"
        />
      </ApprovalCard>
    </div>
  );
}
export default Comment;
