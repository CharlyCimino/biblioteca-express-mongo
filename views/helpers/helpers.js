var hbs = require('hbs');

hbs.registerHelper('bookinstanceStyleStatus', status => {
	return 'text-' + (status == 'Available' ? 'success' : (status == 'Maintenance' ? 'danger' : 'warning'))
})

hbs.registerHelper('isntAvailable', status => status != 'Available')