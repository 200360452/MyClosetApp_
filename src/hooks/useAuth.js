import { useState, useEffect } from 'react';
import { getUser, authenticateUser } from '../data/user'; // Adjust path as needed

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Simulate fetching user data
        const fetchedUser = await getUser(); // Adjust as needed
        setUser(fetchedUser);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const skipAuth = () => {
    setUser(null); // Skip auth and continue as guest
  };

  return { user, loading, error, skipAuth };
};
