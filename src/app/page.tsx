"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import Sidebar from "./Components/Sidebar";
import { createUser, getUsers } from "./utils/api";
import DataEntryTable from "./Components/table";
export default function Home() {
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[]
  >([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createUser(name, email);
    setName("");
    setEmail("");
    fetchUsers();
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Responsive Navigation Bar */}
   
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}

        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th >Facility</th>
                    <th>data type</th>
                    <th>fuelType</th>
                    <th>value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=""></td>
                    <td>Electricity</td>
                    <td>Grid</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>Facility 2</td>
                    <td>Electricity</td>
                    <td>Grid</td>
                    <td>2000</td>
                  </tr>
                  <tr>
                    <td>Facility 3</td>
                    <td>Electricity</td>
                    <td>Grid</td>
                    <td>3000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      await updateUser(editingUser.id, name, email);
      setEditingUser(null);
    } else {
      await createUser(name, email);
    }
    setName('');
    setEmail('');
    fetchUsers();
  };

  const handleEdit = (user: { id: number; name: string; email: string }) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white shadow-md rounded">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 m-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 m-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingUser ? 'Update' : 'Create'}
        </button>
      </form>

      <table className="w-full max-w-lg bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">
                <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white p-1 mx-1 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white p-1 mx-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
*/
