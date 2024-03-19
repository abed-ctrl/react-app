//PascalCasing
function Message() {
    //JSX Javascript XML Syntax
    //expression => is a value or a piece of code that return a value 
    const name = 'Cleverali';
    if (name)
        return <h1>Hello { name }</h1>;
    else
        return <h1>Hello World</h1>
}

export default Message;