var hbs = require('hbs');
var moment = require('moment')

hbs.registerHelper('bookinstanceStyleStatus', status => {
	return 'text-' + (status == 'Available' ? 'success' : (status == 'Maintenance' ? 'danger' : 'warning'))
})

hbs.registerHelper('isntAvailable', status => status != 'Available')

hbs.registerHelper('dateFormatted', (date) => {
	return date ? moment(date).format('YYYY-MM-DD') : '';
})