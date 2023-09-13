import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isSynced, setIsSynced] = useState(false);

  const userList = "https://jsonplaceholder.typicode.com/users";

  // TODO: Implement function to handle sync button click
  const handleSyncData = () => {
    // ...
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Simple CRUD Application</h1>
      <button className="" onClick={handleSyncData}>
        Sync
      </button>
      {/* TODO: Implement ItemList component */}
      {/* TODO: Implement ItemForm component */}
    </div>
  );
}

export default App;
