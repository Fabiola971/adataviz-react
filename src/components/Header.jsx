function Header(){
    return(
        <header>
            <ul className="nav-links">
                <li>
                    <h1>Event Paris
                        <figure>
                            <img 
                             src="src/assets/ima-logo-sign-made-in-france-38463.jpg"/>
                        </figure>
                    </h1>
                </li>
                <li>
                    <label htmlFor="search"></label>
                    <input type="text" name="search" id="input-search"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;