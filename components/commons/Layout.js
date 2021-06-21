import Navbar from './Navbar';
import Meta from './Meta';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Layout = ({ children }) => {
    return (
        <div>
            <Meta />

            <div className='fontRoboto m-0 flex flex-col w-screen h-screen md:mx-auto'>

                <Navbar />

                <main className='h-full mx-auto sm:w-full xl:w-4/5'>
                    {children}
                </main>

            </div>
        </div>
    )
}

export default Layout;




