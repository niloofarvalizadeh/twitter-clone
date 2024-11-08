
import React, { useState } from 'react';
import { Box } from '@mui/material';
import SignUp from './SignUp';
import Login from './Login';

const Auth = () => {
    // Managing the opening and closing of the login modal
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (

        <Box display="flex" minHeight="100vh" flexDirection="row" bgcolor="black">

            {/* image section */}
            <Box sx={{ width: '50%', display: 'block', p: 2, }}>
                <img src="/images/X-home.png" alt="X Image" style={{ objectFit: 'contain', height: 'calc(100vh - 20px)', width: '100%' }} />
            </Box>

            {/* form section */}
            <SignUp openLoginModal={openLoginModal} closeLoginModal={closeLoginModal} />

            {/* Login Modal is managed inside the Login component */}
            <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </Box>

    );
}

export default Auth;
