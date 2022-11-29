import React from "react";
import styled from "styled-components";

const Message = ({ user, userImage, timestamp, message }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>{user}{'  '}<span>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;
> img {
    height: 50px;
    border-radius: 8px;

}
`;

const MessageInfo = styled.div`
padding-left: 10px;

>h4 > span {
    font-size: 10px;
    font-weight: 300;
    margin-left: 4px;
    color: gray;
}
`;
