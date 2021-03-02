const {CandidatesService} = require('./services/candidates-service');

async function main() {
    const candidatesService = new CandidatesService();
    await candidatesService.start();
}

main();
