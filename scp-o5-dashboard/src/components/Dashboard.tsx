import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPoints, setNewPoints] = useState(0);
    const [selectedUser, setSelectedUser] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.from('users').select('*');
            if (error) {
                setError(error.message);
            } else {
                setUsers(data);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    const handleAddPoints = async () => {
        if (!selectedUser) return;

        const { error } = await supabase
            .from('users')
            .update({ points: newPoints })
            .eq('id', selectedUser);

        if (error) {
            setError(error.message);
        } else {
            setNewPoints(0);
            setSelectedUser('');
            // Refresh users list
            const { data } = await supabase.from('users').select('*');
            setUsers(data);
        }
    };

    const handleRemoveUser = async (userId) => {
        const { error } = await supabase.from('users').delete().eq('id', userId);
        if (error) {
            setError(error.message);
        } else {
            // Refresh users list
            const { data } = await supabase.from('users').select('*');
            setUsers(data);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Manage User Points</h2>
            <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                <option value="">Select User</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <input
                type="number"
                value={newPoints}
                onChange={(e) => setNewPoints(Number(e.target.value))}
                placeholder="Enter points"
            />
            <button onClick={handleAddPoints}>Add Points</button>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - Points: {user.points}
                        <button onClick={() => handleRemoveUser(user.id)}>Remove User</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;