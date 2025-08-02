// fetch-data.js

const fetchUserData = async () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    // Convert the response to JSON
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create an unordered list element
    const userList = document.createElement('ul');

    // Loop through the users and create list items
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the user list to the data container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Handle errors
    dataContainer.innerHTML = 'Failed to load user data.';
  }
};

// Invoke the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);