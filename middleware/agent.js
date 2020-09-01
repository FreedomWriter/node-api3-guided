module.exports = requiredAgent => (req, res, next) => {
  const userAgent = req.get("User-Agent");
  //   const formatted = requiredAgent.toLowercase();
  //   console.log(formatted);
  console.log(userAgent, requiredAgent);
  if (!userAgent.includes(requiredAgent)) {
    return res.status(500).json({ message: `Must be using ${requiredAgent}` });
  }

  next();
};
