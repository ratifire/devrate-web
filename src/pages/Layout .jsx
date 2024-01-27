import React from 'react';
import {Outlet, Link} from 'react-router-dom';

import {ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div>
            <header>
                {/*there will be the Header component instead of nav here later*/}
                <nav>
                    <ul className={'navList'}>
                        <li>
                            <Link to={`/`}>Home page</Link>
                        </li>
                        <li>
                            <Link to={`/signup`}>Sign up</Link>
                        </li>
                        <li>
                            <Link to={`/profile`}>Profile</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <ToastContainer
                    position='top-right'
                    autoClose={5000}
                    limit={3}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='colored'
                    transition={Zoom}
                />
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
