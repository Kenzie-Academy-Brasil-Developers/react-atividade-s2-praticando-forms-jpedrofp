import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../.././../services/api";

const Profile = ( {user, setUser} )   => {
  const [userID, setUserID] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/users/${id}/  `).then((response) => setUserID(response.data));
  }, []);

  return (
    <>
       <h3>Kenziebook</h3>
      <button className="button-position1" onClick={() => history.push("/")}>
        Sair
      </button>
      <p>
        Bem vindo {user.fullname}!
      </p>
      <p> {user.address} </p>
      <p> {user.email} </p>
      <p> {user.cellphone} </p>
    </>
  );
};

export default Profile;
