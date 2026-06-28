const getAllJobs = async (req, res) => {
    res.send('get all jobs')
}

const getJob = async (req, res) => {
    res.send('get a job')
}

const createJob = async (req, res) => {
    console.log('request in create job controller')
    res.json(req.user)
}

const updateJob = async (req, res) => {
    res.send('update jobs')
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}
module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}