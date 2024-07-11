const Forms = require('../models/Forms');
const mongoose = require('mongoose')

const createForm = async (req, res) => {
	const { userId, customFields } = req.body

	const form = new Forms({
		userId,
		customFields
	})

	try {
		const newForm = await form.save()

		res.status(201).json(newForm)
	} catch (error) {
		res.status(400).json({ errors: [error] })
	}
}

const getAllFormsByUserId = async (req, res) => {
	const userId = req.user.id

	try {
		const form = await Forms.find({ userId: userId });

		if (!form) {
			res.status(404).json({ errors: ["Formulário não encontrado."] })
			return
		}

		res.status(200).json(form)
	}
	catch (error) {
		res.status(404).json({ errors: ["Formulário não encontrado."] })
		return
	}
}

const getFormById = async (req, res) => {
	const userId = req.user.id
	const formId = req.params.id

	try {
		const form = await Forms.findOne({ userId: userId, _id: formId });

		if (!form) {
			res.status(404).json({ errors: ["Formulário não encontrado."] })
			return
		}

		res.status(200).json(form)
	}
	catch (error) {
		res.status(404).json({ errors: ["Formulário não encontrado."] })
		return
	}
}

const updateForm = async (req, res) => {
	const userId = req.user.id
	const formId = req.params.id
	const customFields = req.body

	try {
		const form = await Forms.findOne({ userId: userId, _id: formId });

		if (!form) {
			res.status(404).json({ errors: ["Formulário não encontrado."] })
			return
		}

		form.customFields = customFields
		await form.save()

		res.status(200).json(form)
	} catch (error) {
		res.status(400).json({ errors: [error] })
	}
}

const deleteForm = async (req, res) => {
	const userId = req.user.id
	const formId = req.params.id

	try {
		const form = await Forms.findOne({ userId: userId, _id: formId });

		if (!form) {
			res.status(404).json({ errors: ["Formulário não encontrado."] })
			return
		}

		await form.remove()

		res.status(200).json({ message: "Formulário deletado com sucesso." })
	} catch (error) {
		res.status(400).json({ errors: [error] })
	}
}

module.exports = {
	createForm,
	getAllFormsByUserId,
	getFormById,
	updateForm,
	deleteForm
}