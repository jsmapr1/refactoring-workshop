module.exports = (req, res, next) => {
  const toppingIndex = req.url.match(/\d/);
  if (!toppingIndex) {
    next();
    return;
  }
  const index = Number(toppingIndex[0]);
  if (index === 5) {
    res.send({
      available: false,
    });
    return;
  }
  res.send({
    available: true,
  });
};
