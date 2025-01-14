const about = (req, res) => {
  return res.json({
    name: "Ravi",
    age: "19",
    work: "Web developer",
  });
};

module.exports = about;
