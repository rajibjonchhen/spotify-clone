import './sidebar.css'


const Sidebar = () => {

    return(<>
    <div className="col-2 side-bar show">
                <div className="d-flex py-3"><a href="./home-page.html"><img src="./assets/Spotify_Logo_RGB_White.png"
                            alt="logo" height="40px"/></a></div>
                <a href="./home-page.html">
                    <div className="home d-flex"><i className="bi bi-house-door-fill my-2 px-3"></i><strong>Home</strong></div>
                </a>
                <a href="search-page.html" className="text-white">
                    <div className="search d-flex"><i className="bi bi-search my-2 px-3"></i><strong>Search</strong></div>
                </a>
                <div className="library d-flex"><i className="bi bi-list my-2 px-3"></i><strong>Your Library</strong></div>

                <div className="square d-flex mt-3"><i className="bi bi-plus-square-fill my-2 px-3"></i><strong>Create
                        Playlists</strong></div>
                <div className="liked-songs d-flex mt-1"><i className="bi bi-heart-fill px-3"></i><strong>Liked Songs</strong>
                </div>
                <hr/>
                <div className="sidebar-list mr-n2">
                    <p className="my-1">Boiler Room: Room 1 &#128293</p>
                    <p className="my-1">L'Imperatrice Mix</p>
                    <p className="my-1">Oceanvs Orientalis &#127769</p>
                    <p className="my-1">Afro Indie</p>
                    <p className="my-1">Taba Brasilis &#127809</p>
                    <p className="my-1">Discover Weekly</p>
                    <p className="my-1">Modern Psychedelia</p>
                    <p className="my-1">Voix de l'Hexagone</p>
                    <p className="my-1">Afrobeat Essencials &#9889</p>
                    <p className="my-1">Cuendano Tabado</p>
                    <p className="my-1">Boiler Room: Room 1</p>
                    <p className="my-1">L'Imperatrice Mix</p>
                    <p className="my-1">Oceanvs Orientalis</p>
                    <p className="my-1">Afro Indie</p>
                    <p className="my-1">Taba Brasilis</p>
                    <p className="my-1">Discover Weekly</p>
                    <p className="my-1">Modern Psychedelia &#127752</p>
                    <p className="my-1">Voix de l'Hexagone</p>
                    <p className="my-1">Afrobeat Essencials</p>
                    <p className="my-1">Cuendano Tabado</p>
                </div>
                <div className="install d-flex pt-1 mb-2"><i className="bi bi-arrow-down-circle pr-2"></i><strong>Install
                        App</strong></div>
            </div>
    </>)
}

export default Sidebar