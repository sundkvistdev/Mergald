export async function loadHTML(url: URL) {
	const response = await fetch(url.href);
	const sourceText = await response.text();
	return sourceText;
}