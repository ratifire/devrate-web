import React from 'react';
import {Outlet, Link} from "react-router-dom";

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
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;