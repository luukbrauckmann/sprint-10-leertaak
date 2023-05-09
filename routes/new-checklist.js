import express from 'express'

const newChecklist = express.Router()

const options = {
	path: '/new-checklist',
	title: 'new checklist',
	template: './new-checklist.ejs',
	styles: 'start.css',
}

newChecklist.get('/new-checklist', (request, response) => response.render('index', options))

export default newChecklist