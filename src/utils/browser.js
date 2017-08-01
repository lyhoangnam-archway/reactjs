export function checkScrollToBottom(distance = 10) {
	const {
		scrollHeight,
		scrollTop
	} = document.getElementsByTagName("body")[0];

	const clientHeight = window.innerHeight;

	if (scrollHeight - (scrollTop + clientHeight) >= distance) return false;
	return true;
}