import Header from "./components/Header";
import UserList from "./components/UserList";

import { useState, useEffect } from "react";

export default function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			const url =
				"https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/users.json";
			const res = await fetch(url);
			const data = await res.json();
			setUsers(data);
		}
		fetchUsers();
	}, []);

	return (
		<main className="app">
			<Header />
			<UserList users={users} />
		</main>
	);
}
