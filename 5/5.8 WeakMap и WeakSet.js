{
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];
    const messagesStatusSet = new WeakSet(messages)
    messages.pop()
    console.log(messagesStatusSet.has(messages[2]))
}