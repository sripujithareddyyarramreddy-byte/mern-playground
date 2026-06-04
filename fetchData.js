const fetchUsers = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();

    users.forEach((u) =>
      console.log(`${u.id}. ${u.name} — ${u.email}`)
    );
  } catch (error) {
    console.error('Fetch failed:', error.message);
  }
};

fetchUsers();
