import { useState } from "react";
import { NavBar } from "./Components/NavBar";
import { UsersData } from "./Components/UsersData";
import { Oval } from "react-loader-spinner";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  function getUsers() {
    setLoader(true);
    fetch(" https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => {
        setLoader(false);
        setData(res.data);
      });
  }

  return (
    <div className="App">
      <NavBar getUsers={getUsers} />
      {loader ? (
        <div className="loader">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loader}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <UsersData data={data} />
      )}
    </div>
  );
}

export default App;
