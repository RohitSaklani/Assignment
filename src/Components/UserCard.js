export function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="avatar">
        <img src={user.avatar} />
      </div>
      <div className="user-card-detail">
        <p>
          Name - {user.first_name} {user.last_name}
        </p>
        <p>Email - {user.email}</p>
      </div>
    </div>
  );
}
