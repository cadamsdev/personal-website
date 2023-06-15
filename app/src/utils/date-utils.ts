
export function getYearsSince(pastDate: Date): number {
	const today = new Date();
	const yearsDifference = today.getFullYear() - pastDate.getFullYear();
	const isTodaysDateBeforeBirthday =
		today.getMonth() <= pastDate.getMonth() && today.getDate() < pastDate.getDate();
	return yearsDifference - +isTodaysDateBeforeBirthday;
}
