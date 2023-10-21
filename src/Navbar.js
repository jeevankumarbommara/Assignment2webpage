function NavBar(){
    return (
        <div>
            <header>
                <nav id="header">
                <ul>
                    <li><i class="fa-solid fa-bars"></i></li>
                    <li><img src="https://www.gstatic.com/youtube/img/promos/growth/efeec251be287e2df3ba917362053774e32e66c9bfe1dda211a66f02316de046_122x56.webp" alt="Youtube Logo"/></li>
                    <div className="search">
                    <li><input className="search2" type="search" placeholder="Search"/><i class="fa-solid fa-magnifying-glass"></i>
                    </li>
                    </div>
                    
                    <li id="submit"><i class="fa-regular fa-user"><button>Sign In</button></i></li>
                </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;