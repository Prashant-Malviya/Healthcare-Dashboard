import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    
    setFormData({
      name: '',
      age: '',
      file: null,
    });

    toast.success("Form Submitted Successfully")
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.licdn.com/dms/image/C4D12AQHF9TwKn5MV8g/article-cover_image-shrink_720_1280/0/1614154803406?e=2147483647&v=beta&t=lUkptE8w1lmTJT2Q974F53HMnFy8dvT8pOz5G31yHsw')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-60 p-8 shadow-md rounded-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Healthcare Dashboard</h1>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-double focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-double focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            Upload File
          </label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-double focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
