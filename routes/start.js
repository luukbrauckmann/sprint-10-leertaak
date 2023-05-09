import express from 'express'

const startPage = express.Router()

const options = {
	path: '/',
	title: 'Start',
	template: './start.ejs',
	styles: 'start.css',
}

startPage.get('/', (request, response) => response.render('index', options))

export default startPage