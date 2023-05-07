import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost/api/show/user');
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    console.log(users);
    return (
      <div>
        <Typography variant="h4" component="h1" gutterBottom>
          User Management
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };
  
  export default UserManagement;
  