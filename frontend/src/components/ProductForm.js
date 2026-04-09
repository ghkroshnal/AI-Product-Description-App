import React, { useState } from 'react';
import API from '../services/api';

function ProductForm({ setDescription }) {
  const [productName, setProductName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await API.post('/generate-description', { productName, keywords });
      setDescription(res.data.description); // ✅ update parent state
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to generate description");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Generate Product Description</h2>
      <input 
        type="text" 
        placeholder="Product Name" 
        value={productName} 
        onChange={e => setProductName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Keywords (comma separated)" 
        value={keywords} 
        onChange={e => setKeywords(e.target.value)} 
        required 
      />
      <button type="submit" disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default ProductForm;
