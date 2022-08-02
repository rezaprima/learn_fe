const fs = require('fs');

async function copyFile() {
	try{
		const data = await fs.readFile('tobecopied.txt', {encoding: 'utf8'});
		fs.writeFile('copyhere.txt', data, (err) => {
			if(err) {
				throw err;
			}
			console.log('copy succeeded');
		})
	}
	catch(err) {
		console.log(err);
	}
}

copyFile();