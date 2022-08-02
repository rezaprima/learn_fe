const fs = require('fs');

function copyFile() {
	try{
		const data = fs.readFileSync('tobecopied.txt', 'utf8');
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