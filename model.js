// Model (model.js)

// Mock data function, replace with actual data retrieval logic
const fetchData = () => {
  // Generate dummy data for demonstration
  const data = [
    { id: 1, name: "Item 1", value: Math.random() * 100 },
    { id: 2, name: "Item 2", value: Math.random() * 100 },
    { id: 3, name: "Item 3", value: Math.random() * 100 },
  ];
  return data;
};

module.exports = { fetchData };
