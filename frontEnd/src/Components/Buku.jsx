import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useNavigate} from "react-router-dom";

// import formix from 'formik'

function Buku() {
	const [Dbuku, setDbuku] = useState([])
	const [toggle, setToggle] = useState(false)
	const navigate = useNavigate()

	const [newBuku, setnewBuku] = useState({
		id_buku: `B${Date.now()}`,
		judulBuku: '',
		penulis: '',
		kategori: '',
		penerbit: '',
		JmlHal: 0,
		tahunPenerbit: 0
	})
// console.log()

	useEffect(() => {
		axios.get('http://localhost:5000/buku')
				.then(res => {
					setDbuku(res.data)
				})
	}, [])


	const onCreate = (addBuku) => {
		// console.log(addBuku)
		axios.post('http://localhost:5000/buku/', addBuku)
				.then(res => {
					console.log(res + addBuku)
				})
		setDbuku([...Dbuku, addBuku])
	}

	const onDelete = (idBuku) => {
		axios.delete('http://localhost:5000/buku/' + idBuku)
				.then(res => {
					console.log(res)

				})
		setDbuku(Dbuku.filter(val => {
			return val.id_buku != idBuku;
		}))
	}

	const selectEdit = (id) => {
		axios.get('http://localhost:5000/buku/' + id)
				.then(res => {
					// console.log(res.data)
					setnewBuku(res.data)
				})
		setToggle(true)
	}

	const onEdit = (editBuku) => {
		// console.log(editBuku.id_buku)
		axios.put('http://localhost:5000/buku/' + editBuku,)
				.then(res => {
					console.log(res)
				})
		setDbuku(Dbuku.filter(val => {
			return val.id_buku != editBuku.id_buku;
			setDbuku([...Dbuku, editBuku])

		}))

	}


	return (
			<div>
				<h1> Buku</h1>
				<Formik initialValues={newBuku}
				        onSubmit={toggle ? onEdit : onCreate}>
					<Form>
						<label>Judul Buku :</label>
						<Field type="text"
						       name='judulBuku'
						       id='kategori'
						       placeholder={'8898'}

						/>

						<label>kategori :</label>
						<Field type="text"
						       name="kategori"
						       id="kategori"
						       placeholder={newBuku.kategori}
						/>

						<label>penerbit :</label>
						<Field type="text"
						       name='penerbit'
						       id='penerbit'
						       placeholder={newBuku.penerbit}
						/>

						<label>penulis : </label>
						<Field type="text"
						       name='penulis'
						       id='penulis'
						       placeholder={newBuku.penulis}
						/>

						<label>tahun terbit : </label>
						<Field type="text"
						       name='tahunPenerbit'
						       id='tahunPenerbit'
						       placeholder={newBuku.tahunPenerbit}
						/>

						<label>jumlah halaman : </label>
						<Field type="text"
						       name='JmlHal'
						       id='JmlHal'
						       placeholder={newBuku.JmlHal}
						/>

						<button type="submit">
							{toggle ? 'edit' : 'save'}
						</button>
					</Form>
				</Formik>

				<div>{
					Dbuku.map(buku => {
						return (
								<ul
										style={{
											border: '1px solid black',
											padding: 10,
											marginTop: 10
										}}


										key={buku.id_buku}>
									<li>Id Buku : {buku.id_buku}</li>
									<li>Judul Buku : {buku.judulBuku}</li>
									<li>kategori :{buku.kategori}</li>
									<li>penerbit : {buku.penerbit}</li>
									<li>penulis : {buku.penulis}</li>
									<li>tahun terbit : {buku.tahunPenerbit}</li>
									<li>jumlah halaman : {buku.JmlHal}</li>
									<li>

										<button
												style={{marginRight: 20}}
												onClick={() => onDelete(buku.id_buku)}
										>delete
										</button>
										<button
												onClick={() => {
													selectEdit(buku.id_buku)
												}}
										>edit
										</button>
									</li>
								</ul>
						)
					})
				}
				</div>
			</div>
	);
}

export default Buku;