var globalVatiable = 'This is global variable'

function globalFunction(){
	var localVariable = 'This is local variable'

	console.log('Visit global/local variable')
	console.log(globalVatiable)
	console.log(localVariable)

	globalVatiable = 'This is changed variable'

	function localFunction(){
		var innerLocalVariable = 'this is inner local variable'

		console.log('Visit global/local/innerLocal variable')
		console.log(globalVatiable)
		console.log(localVariable)
		console.log(innerLocalVariable)
	}
	localFunction()
}

globalFunction()