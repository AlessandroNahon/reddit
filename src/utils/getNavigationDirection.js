export default function getNavigationDirection(pagination) {
	if (pagination.clicked === 'next') return `after=${pagination?.after}`
	if (pagination.clicked === 'prev' && pagination.count > 25)
		return `before=${pagination?.before}`

	return ''
}
