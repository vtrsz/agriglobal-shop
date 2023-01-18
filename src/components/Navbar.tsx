import { HomeOutlined, StorefrontOutlined, NewspaperOutlined, SearchOutlined, NotificationsOutlined, ShoppingCartOutlined, PersonOutlineOutlined } from '@mui/icons-material';


export function Navbar() {
    return (
        <nav className="flex items-center justify-center w-full bg-blue-100 z-50 sticky">
            <div className="flex w-full max-w-7xl h-14 justify-around items-center text-blue-500 font-semibold gap-7">
                <a href="/" className="w-40 hidden sm:flex items-center h-7 md:-ml-4">
                    <img className="w-40" src="https://testing-e-commerce.vercel.app/static/media/logo.1599a7c0264f791406f5.png" alt="AgriGlobal Market" />
                </a>
                <div className="flex items-center gap-4 h-10">
                    <a className="rounded-md -px-1.5 flex flex-col items-center hover:text-white hover:bg-blue-500" href="#">
                        <HomeOutlined />
                        <span className="rounded-lg -py-0.5 px-1.5 text-bg-blue-500">Home</span>
                    </a>
                    <a className="rounded-md -px-1.5 flex flex-col items-center hover:text-white hover:bg-blue-500" href="#">
                        <StorefrontOutlined />
                        <span className="rounded-lg -py-0.5 px-1.5 text-bg-blue-500">Shop</span>
                    </a>
                    <a className="rounded-md -px-1.5 flex flex-col items-center hover:text-white hover:bg-blue-500" href="#">
                        <NewspaperOutlined />
                        <span className="rounded-lg -py-0.5 px-1.5 text-bg-blue-500">News</span>
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <input className="w-28 md:w-36 lg:w-64 h-10 focus:outline-none rounded-l-full border-input text-left text-sm md:pl-7 md:-ml-5" type="text" placeholder="Search" name="search" />
                    <button type="button" className="h-10 w-10 flex justify-center items-center -ml-7 p-2 rounded-full bg-blue-500 hover:brightness-95 transition-all hover:bg-blue-400">
                        <SearchOutlined className="text-white"/>
                    </button>

                    <button type="button" className="relative h-10 w-10 flex justify-center items-center p-2 rounded-full bg-blue-500 hover:brightness-95 transition-all hover:bg-blue-400">
                        <NotificationsOutlined className="text-white"/>
                        <div className="absolute -right-1 -top-1 bg-[#33CC00] rounded-[30px] px-[.45rem] py-0.5">
                            <p className="font-light text-white text-xs">0</p>
                        </div>
                    </button>

                    <button type="button" className="relative h-10 w-10 flex justify-center items-center p-2 rounded-full bg-blue-500 hover:brightness-95 transition-all hover:bg-blue-400" >
                        <ShoppingCartOutlined className="text-white" />
                        <div className="absolute -right-1 -top-1 bg-[#33CC00] rounded-[30px] px-[.45rem] py-0.5">
                            <p className="font-light text-white text-xs">2</p>
                        </div>
                    </button>

                    <button type="button" className="h-10 w-10 flex justify-center items-center p-2 hover:brightness-95 hover:fill-blue-400">
                        <PersonOutlineOutlined className="css-6flbmm hover:brightness-95 transition-all hover:text-blue-400" fontSize="large"/>
                    </button>
                    
                    <select className="h-10 text-center w-32 hover:text-blue-500 text-black bg-white rounded-full font-semibold" name="lenguage" id="lenguage">
                        <option value="english" className="text-black">English</option>
                        <option value="portuguese" className="text-black">Português</option>
                        <option value="spanish" className="text-black">Español</option>
                        <option value="french" className="text-black">Français</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}