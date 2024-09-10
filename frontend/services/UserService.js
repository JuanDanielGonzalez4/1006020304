export const fetchUsers = async () => {
  try {
    const response = await fetch("http://192.168.92.42:8000/api/users");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// export const createUser = ({ name, email, password }) => {
//   fetch("http://192.168.92.42:8000/api/users", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//       password: password,
//     }),
//   });
// };
