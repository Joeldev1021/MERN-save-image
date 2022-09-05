function isValidHttpUrlImage(string) {
	return string.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

module.exports = { isValidHttpUrlImage };
