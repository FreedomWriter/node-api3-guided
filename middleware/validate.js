function validateHubId() {
  return (req, res, next) => {
    Hubs.findById(req.params.id)
      .then(hub => {
        if (hub) {
          //   res.status(200).json(hub);
          // assigning the value returned from the promise (hub) to a key value pair on the req object (req.hub = hub)
          req.hub = hub;
          next();
        } else {
          res.status(404).json({ message: "Hub not found" });
        }
      })
      .catch(error => {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: "Error retrieving the hub"
        });
      });
  };
}
