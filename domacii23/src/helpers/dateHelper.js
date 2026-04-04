export function dateToday() {
	const today = new Date();
	const futureDate = new Date();

	futureDate.setDate(today.getDate() + 14);

	return futureDate.toISOString().split('T')[0];
}
