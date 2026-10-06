import User from "./User";

export default function UserList({ users }) {
	return (
		<section className="grid">
			{users.map((user) => (
				<User
					key={user.id}
					name={user.name}
					title={user.title}
					mail={user.mail}
					image={user.image}
				></User>
			))}
		</section>
	);
}
