import { Link } from "react-router-dom";

const CatePage = () => {

    return (
        <div className="flex justify-center">
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/cate/"KYC"`}>
                        <img
                            className="rounded-t-lg"
                            src="/static/logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/KYC`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center self-center">
                            KYC
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/ZX`}>
                        <img
                            className="rounded-t-lg"
                    src="/static/logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/ZX`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center self-center">
                            ZX
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Lifan`}>
                        <img
                            className="rounded-t-lg"
                    src="/static/logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/Lifan`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center self-center">
                            Lifan
                            </h5>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/FAW`}>
                        <img
                            className="rounded-t-lg"
                    src="/static/logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/FAW`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center self-center">
                            FAW
                            </h5>
                        </Link>
                    </div>
                    

                </div>

            </div>
        </div>
    );
};
export default CatePage;