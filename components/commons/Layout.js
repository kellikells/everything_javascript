import Head from 'next/head';
import Navbar from './Navbar';
import Meta from './Meta';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Layout = ({ children }) => {
    return (
        <>
            {/* <Meta /> */}

            {/* <Head>
                <title>Algorithm Questions</title>
                <meta name='description' content='algorithm questions javascript' />
                <link rel='icon' href='/favicon.ico' />
            </Head> */}

            <div className='fontRoboto m-0 flex flex-col w-full min-h-screen md:mx-auto'>

                <Navbar />

                <main className='h-full mx-auto sm:w-full xl:w-4/5'>
                    {children}
                </main>

            </div>
        </>
    )
}

export default Layout;




