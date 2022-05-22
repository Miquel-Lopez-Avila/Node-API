const handleErrors = (err, req, res) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).send('invalid token...');
    }else{
        return res.status(500).send('fail...');
    }
};

export default handleErrors;