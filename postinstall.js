const fs = require("fs-extra")

const folder_map = {
	"r/react": [
		"node_modules/next/dist/compiled/react",
		"packages/fb/node_modules/next/dist/compiled/react",
		"packages/ui/node_modules/next/dist/compiled/react",
		"packages/negiganaito/node_modules/next/dist/compiled/react",
	],
	"r/react-experimental": [
		"node_modules/next/dist/compiled/react-experimental",
		"packages/fb/node_modules/next/dist/compiled/react-experimental",
		"packages/ui/node_modules/next/dist/compiled/react-experimental",
		"packages/negiganaito/node_modules/next/dist/compiled/react-experimental",
	],
	"r/react-dom": [
		"node_modules/next/dist/compiled/react-dom",
		"packages/fb/node_modules/next/dist/compiled/react-dom",
		"packages/ui/node_modules/next/dist/compiled/react-dom",
		"packages/negiganaito/node_modules/next/dist/compiled/react-dom",
	],
	"r/react-dom-experimental": [
		"node_modules/next/dist/compiled/react-dom-experimental",
		"packages/fb/node_modules/next/dist/compiled/react-dom-experimental",
		"packages/ui/node_modules/next/dist/compiled/react-dom-experimental",
		"packages/negiganaito/node_modules/next/dist/compiled/react-dom-experimental",
	],
}

for (const sourceFolder in folder_map) {
	const destinationFolders = folder_map[sourceFolder]

	for (const destFolder of destinationFolders) {
		try {
			// Remove the destination folder if it exists
			fs.removeSync(destFolder)

			// Copy the source folder to the destination folder
			fs.copySync(sourceFolder, destFolder)

			console.log(`${sourceFolder} -> ${destFolder}`)
		} catch (error) {
			console.error(`Error replacing folder: ${sourceFolder} -> ${destFolder}`)
			console.error(error)
		}
	}
}
