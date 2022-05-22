const Server = app => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log('server on port', PORT);
    });
}
export default Server;