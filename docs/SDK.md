# Relay System SDK

Beyond UI components, Relay provides powerful access to the underlying system via the **Relay Helper**.

## AI (Ollama)

The SDK provides a `useOllama` hook to interact directly with a local Ollama instance managed by the Relay Helper.

```tsx
import { useOllama } from '@dotrly/sdk';

function AIAssistant() {
  const { 
    available,   // true if Ollama is running
    models,      // list of available models
    generate,    // function to generate text
    chat,        // function for chat completion
    loading      // loading state
  } = useOllama();

  const handleAsk = async () => {
    if (!available) return;
    
    // Simple generation
    const response = await generate('llama3', 'Why is the sky blue?');
    console.log(response.response);

    // Chat
    const chatResponse = await chat('llama3', [
      { role: 'user', content: 'Hello!' }
    ]);
    console.log(chatResponse.message.content);
  };

  return (
    <div>
      {available ? 'AI Ready' : 'AI Offline'}
    </div>
  );
}
```

## File System

Relay Apps can read and write files on the host system via the Helper API. 

> **Note:** Apps run in a sandbox. To access the host system, you must call the Helper directly.

### Accessing the Helper

The Helper URL is injected into the global window object.

```typescript
const HELPER_URL = window.__RELAY_HELPER_HOST__ || 'http://localhost:5378';
```

### File System API

**1. List Directory**
```typescript
const response = await fetch(`${HELPER_URL}/api/fs/list?path=/Users/username/Desktop`);
const data = await response.json();
// data.entries = [{ name: 'file.txt', type: 'file' }, ...]
```

**2. Read File**
```typescript
const response = await fetch(`${HELPER_URL}/api/fs/read?path=/Users/username/doc.txt`);
const data = await response.json();
// data.content = "File contents..."
```

**3. Write File**
```typescript
await fetch(`${HELPER_URL}/api/fs/write`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    path: '/Users/username/new-file.txt',
    content: 'Hello World'
  })
});
```

**4. Create Directory**
```typescript
await fetch(`${HELPER_URL}/api/fs/mkdir`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    path: '/Users/username/new-folder'
  })
});
```

## Terminal Execution

You can execute simple commands on the host machine.

```typescript
const response = await fetch(`${HELPER_URL}/api/terminal/exec`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    command: 'echo "Hello from Relay"'
  })
});
const result = await response.json();
console.log(result.stdout);
```
