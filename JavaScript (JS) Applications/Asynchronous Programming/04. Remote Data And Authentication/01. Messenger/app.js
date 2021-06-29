function attachEvents() {
    const textArea = document.getElementById('messages')
    const authorField = document.querySelector('input[name="author"]')
    const messageField = document.querySelector('input[name="content"]')
    const sendBtn = document.getElementById('submit').addEventListener('click',sendMessage)
    const refreshBtn = document.getElementById('refresh').addEventListener('click',getMessages)

    async function sendMessage() {
        const data = {
            author:authorField.value,
            content:messageField.value
        }
        const response = fetch('http://localhost:3030/jsonstore/messenger',{
           method: 'post',
            headers: { 'Content-type': 'application/json' },
           body: JSON.stringify(data),

        })
        console.log(await (await response).json())
        authorField.value = ''
        messageField.value = ''
    }

    async function getMessages() {
        textArea.value=''
        const response = await fetch('http://localhost:3030/jsonstore/messenger')
        const messages = await response.json()
        
        Object.values(messages).forEach(m => {
            textArea.value += `${m.author}: ${m.content}\n`
            
        })
        
    }

 
   
}

attachEvents();
