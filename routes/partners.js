import express from 'express'
import { get } from '../lib/data-access.js'

const partners = express.Router()

const options = {
	path: '/partners',
	title: 'partners',
	template: './partners.ejs',
	styles: 'partners.css'
}


partners.get('/partners', async (request, response) => {
	const { query } = request
	const websites = await get('websites', query)
		.then((res) => res.websites)

	const projects = await get('urls', query)
		.then((res) => res.urls)

	// Route voor projects
	/**
	 * @author Luuk Brauckmann
	 */
	// defines different sorts as JSON objects within an Array
	const sortOptions = [
		{ label: 'Recent', field: 'createdAt', direction: 'DESC' },
		{ label: 'Partner A-Z', field: 'titel', direction: 'ASC' },
		{ label: 'Partner Z-A', field: 'titel', direction: 'DESC' }
	]

	// gets sort value from url query param
	let { sort } = request.query
	// parses the value so it can be accessed as JSON
	if (sort) sort = JSON.parse(sort)
	// url doesn't contain a sort option, chooses default sort option
	else sort = sortOptions[0]

	// clones allProjectsData.urls so .reverse() function won't affect the original
	let clonedProjects = [...projects];
	// gets the underlaying website titel and maps it straight to url as titel
	clonedProjects = clonedProjects.map((url) => ({ ...url, titel: url.website.titel }))

	// sorts every url by given sort option field of cloned allProjectsData.urls
	clonedProjects = clonedProjects.sort((a, b) => a[sort.field].localeCompare(b[sort.field]))
	//checks for sorting direction, if direction is DESC, reverse cloned urls ones
	if (sort.direction === 'DESC') clonedProjects.reverse()

	console.log(clonedProjects)

	response.render('index', { ...options, websites, sortOptions, currentSort: sort, projects: clonedProjects })
})

export default partners