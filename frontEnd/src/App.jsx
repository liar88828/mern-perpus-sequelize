import React, {createContext, useState} from 'react';
// import axios from 'axios';
import {
	BrowserRouter as Router,
	Routes, Route, Link
} from 'react-router-dom';
import './style.css';
import {Home} from './pages/Home';
import Buku from "./Components/Buku.jsx";
import Anggota from "./Components/Anggota.jsx";
import Peminjam from "./Components/Peminjam.jsx";
import PeminjamDetail from "./Components/PeminjamDetail.jsx";
// import { CreatePost } from './pages/CreatePost';
// import { Post } from './pages/Post';


export const UserContext = createContext('')


function App() {
	const [detailPeminjam, setDetailPeminjam] = useState({})


	return (
			<UserContext.Provider value={{detailPeminjam, setDetailPeminjam}}>
				<div className='App'>
					<Router>
						<div className="navbarr">
							<Link to='/'>Home</Link>
							<Link to='/buku'>buku</Link>
							<Link to='/anggota'>Anggota</Link>
							<Link to='/peminjam'>Peminjam</Link>
							<Link to='/peminjamDetail'>Peminjam Detail</Link>
						</div>
						<Routes>
							<Route path='/' exact element={<Home/>}/>
							<Route path='/buku' element={<Buku/>}/>
							<Route path='/anggota' element={<Anggota/>}/>
							<Route path='/peminjam' element={<Peminjam/>}/>
							<Route path='/peminjamDetail' element={<PeminjamDetail/>}/>
							{/*<Route path='/buku/:id' element={< />} />*/}
							{/*<Route path='/anggota/:id' element={<CreatePost />} />*/}
							{/*<Route path='/peminjam/:id' element={<CreatePost />} />*/}
							{/*<Route path='/peminjamDetail/:id' element={<CreatePost />} />*/}
							<Route path='*' element={<div><h1>NOTTING</h1></div>}/>
						</Routes>
					</Router>
				</div>
			</UserContext.Provider>
	);

}

export default App;
