const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "TERCERO",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			contacts: [
				{
					full_name: "",
					address: "",
					phone: "",
					email: ""
				}

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },


			loadSomeData: () => {

				//Traerme la agenda	



				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

			},


			traerAgenda: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/miagenda", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
			},





			//Borrar un contacto de la agenda
			borrarContacto: (indexABorrar) => {

				var requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/" + indexABorrar, requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
				setTimeout(() => { location.reload(); }, 1000);





			},


			//Borrar TODOS los contactos de la agenda
			borrarTodosLosContactos: () => {

				var requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/miagenda", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
				setTimeout(() => { location.reload(); }, 1000);
			},

			crearContacto: () => {

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"full_name": "Manolo Bradley",
					"email": "dave@gmail.com",
					"agenda_slug": "miagenda",
					"address": "47568 NW 34ST, 33434 FL, USA",
					"phone": "7864445566"
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					

			},




			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
