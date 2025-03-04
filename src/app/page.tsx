"use client";
import { useEffect, useState } from "react";
import { getUsers, createUser } from "../app/utils/api";

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
      <nav className="bg-white text-green-700 shadow-lg">
        <div className="max-w-7xl ">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex items-center py-4 px-2">
                <img
                  src="/J9jiyHG - Imgur.png"
                  alt="logo"
                  className="w-auto h-8"
                />
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#home"
                  className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                >
                  About
                </a>
                <a
                  href="#members"
                  className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                >
                  Members
                </a>
                <a
                  href="#contact"
                  className="py-4 px-3 hover:bg-green-600 transition duration-300 rounded"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-green-100 text-green-700">
          <div className=" w-full">
            <h2 className="text-xl font-semibold ml-4 mt-4">Main Menu</h2>
            <ul className="mt-4 space-y-2">
              <li className="p-2 hover:bg-gray-500   transition duration-200  hover:text-white">
                <a
                  href="#dashboard"
                  className="flex items-center space-x-2 ml-2"
                >
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="p-2 bg-gray-500   transition duration-200  text-white">
                <a href="#users" className="flex items-center space-x-2 ml-2">
                  <span>Users</span>
                </a>
              </li>
              <li className="p-2 hover:bg-gray-500   transition duration-200  hover:text-white">
                <a href="#settings" className="flex items-center space-x-2 ml-2">
                  <span>Settings</span>
                </a>
              </li>
              <li className="p-2 hover:bg-gray-500   transition duration-200  hover:text-white">
                <a href="#reports" className="flex items-center space-x-2 ml-2">
                  <span>Reports</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                User Management
              </h1>

              <div className="mb-6">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-0 md:flex md:items-end md:space-x-4"
                >
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
                    >
                      Add User
                    </button>
                  </div>
                </form>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
