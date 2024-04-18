import { Home } from "../views/home";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			demo: [


			],
			diarys: [],
			createDiarys: [],
			singleDiary: [],
			contacts: [],
			newContact: [],
			deleteContact: [],
			contactToDelete: {},
			updateContact:{},

		},
		actions: {

			getAllDiarys() {

				fetch("https://playground.4geeks.com/contact/agendas", {
					method: 'GET'
				})
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.log(error))
			},

			createNewDiary() {
				fetch("https://playground.4geeks.com/contact/agendas/Carmelo", {
					method: 'POST',
					body: JSON.stringify([]),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => {
					if (!response.ok) {
						throw new Error('La creación de usuario falló con código ' + response.status + ' porque la agenda ya está creada.');
					}
					// Devolver los datos en formato JSON
					return response.json();
				})
					.then((data) => setStore({ createDiarys: data }))
					.catch((error) => console.log(error))
			},

			getSingleDiary() {
				fetch("https://playground.4geeks.com/contact/agendas/Carmelo", {
					method: 'GET'
				})
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.log(error))


			},


			getAllContacts() {
				fetch("https://playground.4geeks.com/contact/agendas/Carmelo/contacts", {
					method: 'GET'
				})
					.then((response) => response.json())
					.then((data) => {
						// console.log(data.contacts);
						setStore({ contacts: data.contacts })})
					.catch((error) => console.log(error))
			},


			newContact: (requestData) => {
				fetch("https://playground.4geeks.com/contact/agendas/Carmelo/contacts", {
					method: 'POST',
					body: JSON.stringify(requestData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						getStore().getAllContacts()
					})
					.catch(error => console.log(error));
			},

			deleteContact(id) {
				console.log(id);
				fetch(`https://playground.4geeks.com/contact/agendas/Carmelo/contacts/${id}`, {
					method: 'DELETE'
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ deleteContact: data });
					})
					.catch((error) => console.log(error))
			},

			contactToDelete: (contact) => {
				setStore({ contactToDelete: contact });
			},

			updateContact(id, newData){
				fetch(`https://playground.4geeks.com/contact/agendas/Carmelo/contacts/${id}`,{
					method:'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newData)
				})
				.then(response => response.json())
				.then(data => {
					setStore({ updateContact: data });
				})
				.catch((error) => console.log(error))
			}
		}
	};
};


export default getState;
