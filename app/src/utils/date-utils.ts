
export function getYearsSince(pastDate: Date): number {
	const today = new Date();
	const yearsDifference = today.getFullYear() - pastDate.getFullYear();
	const isTodaysDateBeforeBirthday =
		today.getMonth() <= pastDate.getMonth() && today.getDate() < pastDate.getDate();
	return yearsDifference - +isTodaysDateBeforeBirthday;
}

export function formatDate(dateString: string): string {
	const temp = dateString.substring(0, dateString.indexOf(' '));
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'long'
	}).format(new Date(temp));
}
