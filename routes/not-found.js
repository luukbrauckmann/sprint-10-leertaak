import express from 'express'

const notFoundPage = express.Router()

const options = {
	path: '**',
	title: 'Niet gevonden',
	template: './not-found.ejs',
	styles: 'start.css',
}

notFoundPage.get('**', (request, response) => response.render('index', options))

export default notFoundPage