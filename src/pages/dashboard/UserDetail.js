import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";

export default function UserDetail({ title }) {
  const { setTitle } = useOutletContext();
  const { userID } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);

  const fetchUserDetail = async () => {
    setLoading(true);

    const response = await axios.get(`https://reqres.in/api/users/${userID}`);

    setData(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserDetail(); // fetch page 1 of users
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container pt-2">
      <div className="row px-2">
        <div className="col-12 col-md-6">
          <div className="card p-4">
            <h3>{loading || data.first_name + " " + data.last_name}</h3>
            <div className="row mt-4">
              <div className="col-12 col-md-6">
                {loading || (
                  <img
                    src={data.avatar}
                    alt="data.email"
                    className="user-img"
                  />
                )}
              </div>
              <div className="col-12 col-md-6 pt-3">
                <div className="mb-4">
                  <label>First Name</label>
                  <p className="text-muted">{loading || data.first_name}</p>
                </div>
                <div className="mb-4">
                  <label>Last Name</label>
                  <p className="text-muted">{loading || data.last_name}</p>
                </div>
                <div className="mb-4">
                  <label>Email</label>
                  <p className="text-muted">{loading || data.email}</p>
                </div>
              </div>
            </div>
          </div>

          <a href="/users">
            <button className="btn btn-sm btn-view mt-4 px-4">BACK</button>
          </a>
        </div>
      </div>
    </div>
  );
}
