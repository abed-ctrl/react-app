let count = 0;

const Message = () => {
  // to see how mush time React render the component
  console.log("Message called", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
