let dataList = [];

exports.author_list = (req, res) => {
  res.send(dataList);
};

exports.add_to_list = (req, res) => {
  // Extract data from request body
  const data = req.body;

  // Add the data to the list
  dataList.push(data);

  // Send a success response
  res.status(201).send("Data added to the list successfully");
};

// Export dataList for access from other modules
exports.dataList = dataList;
