const express = require('express');
const axios = require('axios').default;
const CircularJSON = require('circular-json');
var cors = require('cors');

const PORT = 3001;
const CANDIDATES_URL = 'https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122';

class CandidatesService {
    constructor() {
        this.app = express();

        this.app.use(cors())
    }

    start() {
        this.app.use('/candidates', async (req, res) => {
            const response = await axios.get(CANDIDATES_URL, {});
            let json = CircularJSON.stringify(response);
            res.send(json);
        });

        this.app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });
    }
}

module.exports = {
    CandidatesService
};
