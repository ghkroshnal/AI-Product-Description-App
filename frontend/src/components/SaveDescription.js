import React, { useState } from 'react';
import API from '../services/api';

function SaveDescription() {
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // NEW: track loading state

  const handleSave = async e => {
    e.preventDefault();

    // ✅ Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage("You must be logged in to save descriptions.");
      return;
    }

    setLoading(true); // show loading state
    try {
      // ✅ Send POST request with JWT
      const res = await API.post(
        '/save-description',
        { description },
        {
          headers: {
            Authorization: `Bearer ${token}` // attach JWT
          }
        }
      );

      setMessage(res.data.message || "Description saved!");
      setDescription(''); // clear input after save
    } catch (err) {
      // ✅ Better error feedback
      setMessage(
        err.response?.data?.message ||
        err.message ||
        "Failed to save description"
      );
    } finally {
      setLoading(false); // reset loading state
    }
  };

  return (
    <div>
      <h2>Save a Product Description</h2>
      <form onSubmit={handleSave}>
        <textarea
          placeholder="Enter your product description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SaveDescription;
