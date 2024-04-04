import { Home } from "../views/home";

const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			demo: [


			],
			diarys: [],
			contacts: [],
			newContact: [],
			deleteContact: [],

		},
		actions: {

			getAllDiarys() {

				fetch("https://playground.4geeks.com/apis/fake/contact/agenda", {
					method: 'GET'
				})
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.log(error))
			},


			getAllContacts() {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Carmelo", {
					method: 'GET'
				})
					.then((response) => response.json())
					.then((data) => setStore({ contacts: data }))
					.catch((error) => console.log(error))
			},


			newContact: (requestData) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: 'POST',
					body: JSON.stringify(requestData),
					agenda_slug: "Carmelo",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ newContact: data });
					})
					.catch(error => console.log(error));
			},

			deleteContact() {
				fetch(`https://playground.4geeks.com/apis/fake/contact/57942899329`, {
					method: 'DELETE'
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ deleteContact: data });
					})
					.catch((error) => console.log(error))
			}
		}
	};
};


export default getState;
