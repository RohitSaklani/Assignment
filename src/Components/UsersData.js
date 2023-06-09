import { UserCard } from "./UserCard";

export function UsersData({ data }) {
  return (
    <div className="user-container">
      {data.map((ele) => (
        <UserCard id={ele.id} user={ele} />
      ))}
    </div>
  );
}
