import express from 'express'
import { get } from '../lib/data-access.js'

const partners = express.Router()

const options = {
	path: '/partners',
	title: 'partners',
	template: './partners.ejs',
	styles: '/styles/start.css'
}


partners.get('/partners', async (request, response) => {
	const { query } = request
	const websites = await get('websites', query)
		.then((res) => res.websites)

	
	response.render('index', { ...options, websites })
})

export default partners