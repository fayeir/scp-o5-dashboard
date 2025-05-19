import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User } from '../types';

const O5List: React.FC = () => {
    const [o5Candidates, setO5Candidates] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchO5Candidates = async () => {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .order('points', { ascending: false });

            if (error) {
                console.error('Error fetching O5 candidates:', error);
            } else {
                setO5Candidates(data);
            }
            setLoading(false);
        };

        fetchO5Candidates();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>O5 Candidates</h1>
            <ul>
                {o5Candidates.map((candidate) => (
                    <li key={candidate.id}>
                        {candidate.name} - Points: {candidate.points}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default O5List;