var textNum = [[doc askForUserInput: "How Many? Her?" initialValue: "1"] integerValue],
	bluthIpsum = function(num, type) {

	for (var i = 0; selection.length; i++) {
		var layer = selection[i],
			textDiv, textEnd

		if(type === "sentence") {
			textDiv = '. ',
			textEnd = '.'
		} else if(type === "word"){
			textDiv = ' ',
			textEnd = ''
		}

		if([layer class] === MSTextLayer) {
			var ipsumNum = Math.floor(Math.random() * data.length),
				ipsumStr = data[ipsumNum].split(textDiv, num).join(textDiv) + textEnd,
				dataRemove = data.splice(ipsumNum, 1)
		
			[layer setStringValue: ipsumStr]
			[layer setName: ipsumStr]
			[layer adjustFrameToFit]

		} else {
			[[NSApplication sharedApplication] displayDialog: "This isn't a text field...  Ain't nobody got time for that!" withTitle: "Her?"]
		}
	}
}