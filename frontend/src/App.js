import React, { useState } from 'react';
import AuthForm from './components/AuthForm'; 
import ProductForm from './components/ProductForm';
import SaveDescription from './components/SaveDescription';
import './App.css';
import SavedDescriptionsList from './components/SavedDescriptions';

function App() {
  const [user, setUser] = useState(null);
  const [description, setDescription] = useState('');

  // ✅ Called after successful login/register
  const handleLogin = email => setUser(email);

  // ✅ Generate description (later you can replace with AI API call)
  const handleGenerate = async ({ productName, keywords }) => {
    const fakeDescription = `Introducing ${productName}, crafted with ${keywords}. Perfect for your needs!`;
    setDescription(fakeDescription);
  };

  return (
    <div className="App">
      <h1>AI Product Description Generator</h1>
      <p>
        Generate compelling product descriptions in seconds. Just enter your product details and let our AI do the rest!
      </p>

      {!user ? (
        // ✅ Show login/register form if not logged in
        <AuthForm onLogin={handleLogin} />
      ) : (
        <>
          {/* ✅ Form to generate description */}
          <ProductForm onGenerate={handleGenerate} />

          {/* ✅ Save generated description to backend */}
          <SaveDescription description={description} />

          {/* ✅ Fetch and display saved descriptions from backend */}
          <SavedDescriptionsList />
        </>
      )}
    </div>
  );
}

export default App;
