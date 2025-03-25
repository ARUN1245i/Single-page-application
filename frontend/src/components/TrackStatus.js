import { useEffect, useState } from 'react';
import axios from 'axios';

const TrackStatus = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/applications')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error("Error fetching applications:", error);
      });
  }, []);

  return (
    <div>
      <h2>Application Status</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.applicant_name} - {app.business_name} - {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackStatus;
