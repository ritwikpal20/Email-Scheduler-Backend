const errorHandler = (err, req, res, next) => {
    console.log("errorHandler", err);
    res.status(500).json({ message: "Internal server error" });
};

module.exports = errorHandler;
