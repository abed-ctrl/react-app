// if we declare a variable out of our component and use it inside it. our component is not pure.
// let count = 0;

const Message = () => {
  let count = 0;
  count++;
  return <div>Message {count}</div>;
};

export default Message;
