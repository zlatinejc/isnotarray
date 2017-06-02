var isArray  = require("isarray");

module.exports = function(arg){
	return !isArray(arg);
};