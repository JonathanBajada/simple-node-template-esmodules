import Job from '../models/JobModel.js'

export const createJob = async (req, res) => {
	const job = await Job.create(req.body)
	res.status(201).json({ job })
}

export const getAllJobs = async (req, res) => {
	const jobs = await Job.find({ company: 'facebook' })
	res.status(200).json({ jobs })
}

export const getJob = async (req, res) => {
	const { id } = req.params
	const job = await Job.findById(id)
	if (!job) {
		res.status(404).json({ msg: `no job with id ${id}` })
		return
	}
	res.status(200).json({ job })
}

export const deleteJob = async (req, res) => {
	const { id } = req.params
	const removeJob = await Job.findByIdAndDelete(id)
	if (!removeJob) {
		res.status(404).json({ msg: `no job with id ${id}` })
		return
	}
	res.status(200).json({ msg: 'job modified', job: removeJob })
}

export const updateJob = async (req, res) => {
	const { id } = req.params
	const updatedJob = await Job.findOneAndUpdate(id, req.body, {
		new: true,
	})
	if (!updatedJob) {
		res.status(404).json({ msg: `no job with id ${id}` })
		return
	}
	res.status(200).json({ msg: 'job modified', job: updatedJob })
}
