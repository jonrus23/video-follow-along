exports.getData = (req, res) => {
    // get data from database
    const data = {
        subject: 'IFT 458',
        grade: 'A',
        date: '01/01/1990'
    }
    res.send(`Hello World! from student GET ${JSON.stringify(data)}`);
};

exports.postData = (req, res) => res.send('Hello World! from student POST');
exports.putData = (req, res) => res.send('Hello World! from student PUT');
exports.deleteData = (req, res) => res.send('Hello World! from student DELETE');