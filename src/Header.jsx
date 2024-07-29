function Header(){
    return (
        <header>
            <div className="container navbar navbar-expand-lg"> 
                <div style={{display: 'flex', alignItems: 'center', width: '100%', margin: '0px 20px'}}>
                    <h4 className="logo1 mt-4">Gagnidze<b>Crew</b></h4>
                    <button className="navbar-toggler ms-auto mt-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                                fill="white"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
                                fill="white"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
                                fill="white"></path>
                        </svg>
                    </button>
                </div>
                <div className="mynav collapse navbar-collapse" id="myNav">
                    <ul className="navbar-nav mt-2">
                        <li className="nav-link nav-link1">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-link nav-link1">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-link nav-link1">
                            <a href="#service" className="nav-link">Students</a>
                        </li>
                        <li className="nav-link nav-link1">
                            <a href="#skill" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-link nav-link1">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>  {/* This closing div tag was missing */}
        </header>
    );
}

export default Header;
