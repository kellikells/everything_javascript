import Head from 'next/head';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = (props) => (
    <div>
        {/* <div className='fontRoboto flex flex-col flex-grow mx-auto min-h-screen'> */}
        <Head>
            <title>Algo Practice</title>
            {/* <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' /> */}
        </Head>

        {/* <div className='fontRoboto flex flex-col flex-grow mx-auto min-h-screen'> */}
        <body className='flex flex-col min-h-screen'>
            <div className="site-frame flex flex-col max-w-screen-lg m-auto w-full flex-grow  md:p-2">
                <Navbar />

                {/* <main className='mx-auto sm:w-full xl:w-4/5'> */}
                {/* <main className='flex flex-grow flex-wrap w-full'>
            {props.children}
        </main> */}
                <div className='flex flex-grow flex-wrap w-full'>
                    <main className='md:flex my-4 self-stretch flex-grow'>
                        {props.children}
                    </main>
                </div>

                <Footer />
            </div>
        </body>
    </div>









    // <body className="bg-gray-400  flex flex-col min-h-screen text-base">

    //     <div className="site-frame flex flex-col max-w-screen-lg m-auto w-full flex-grow bg-gray-300 shadow-xl md:p-2">

    //         <div className="site-header  w-full bg-white  shadow-lg rounded-lg p-4 py-8 text-indigo-700">
    //             <h1 className="text-2xl">
    //                 Site-Header section
    //             </h1>
    //         </div>



    //         <div className="site-body flex flex-grow flex-wrap w-full ">
    //             <div className="md:flex  my-4 self-stretch flex-grow">
    //                 <div className="site-main rounded-lg bg-white p-4 sm:w-full md:w-2/3 md:mr-4 mt-4 md:mt-0 flex-none">
    //                     <h2 className="text-xl">
    //                         Site-Main section
    //                     </h2>
    //                 </div>
    //                 <div className="site-sidebar rounded-lg bg-gray-100 p-4 sm:w-full mt-4 md:mt-0 md:w-1/3 ">
    //                     <h3 className="text-lg">
    //                         Site-Sidebar section
    //                     </h3>
    //                     <div className="site-box site-accordion overflow-hidden rounded-lg bg-white my-2 p-4 shadow-sm">

    //                         <div className="site-box-header -m-4 mb-4 p-4 bg-indigo-500 text-lg ">
    //                             <h4 className="text-xl">
    //                                 Site-box-header -RESUME w/ BG TEXTURE HERE.
    //                             </h4>
    //                         </div>
    //                         Site-box.site-accordion. RESUME w/ textures etc here!
    //                         asdfasf saf sdf sf

    //                         <div className="-mx-4 -mb-4 text-center">
    //                             <i className="his his-chevron-down text-3xl text-white bg-indigo-400 hover:bg-indigo-500  rounded-full"></i>
    //                         </div>

    //                     </div>

    //                     <div className="site-box site-accordion rounded-lg bg-white my-2 p-4 shadow-sm">
    //                         Site-box.site-accordion.
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="site-footer bg-gray-200 m-auto w-full max-w-screen-lg p-4 py-8">
    //             <h3 className="text-lg">
    //                 Site-Footer section
    //             </h3>
    //         </div>
    //     </div>
    // </body>




);

export default Layout;