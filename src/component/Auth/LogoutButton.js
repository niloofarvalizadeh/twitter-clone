import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

function LogoutButton() {
    const navigate = useNavigate();

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
            if (event === 'SIGNED_OUT') {
                console.log("User has logged out.");
                navigate('/login'); 
            }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Logout error:", error.message);
        } else {
            console.log("User is logged out");
            navigate('/auth');
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-Primary-Blue w-full h-[50px] rounded-full py-2 px-4
            text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#1664b3]"
        >
            Log Out
        </button>
    );
}

export default LogoutButton;
