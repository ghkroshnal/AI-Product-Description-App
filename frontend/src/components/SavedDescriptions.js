import React, { useEffect, useState } from 'react';
import API from '../services/api';

function SavedDescriptionsList() { // ✅ match function name with export
  const [descriptions, setDescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      // ✅ Check if user is logged in
      if (!token) {
        setError("You must be logged in to view saved descriptions.");
        setLoading(false);
        return;
      }

      try {
        const res = await API.get('/saved-descriptions', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setDescriptions(res.data.savedDescriptions || []);
      } catch (err) {
        setError(
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch descriptions"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading descriptions...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>My Saved Descriptions</h2>
      {descriptions.length === 0 ? (
        <p>No descriptions saved yet.</p>
      ) : (
        <ul>
          {descriptions.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedDescriptionsList;
