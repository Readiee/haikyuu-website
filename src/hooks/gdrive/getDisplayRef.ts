export function getDisplayRef(gDriveRef: string): string {
	const match = gDriveRef.match(/\/d\/(.+?)\/view/)
	if (match && match[1]) {
		const displayRef = 'https://drive.google.com/uc?export=view&id=' + match[1]
		return displayRef
	}
	return 'Link error'
}
