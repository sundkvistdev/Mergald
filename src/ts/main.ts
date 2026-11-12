import "../css/main.css";

function main() {
	const page = document.querySelector("#app");

	if (!page)
		throw new Error("Page not found.");

	const img = document.createElement("img");
	img.style.backgroundColor = "#ff00ff";
	img.style.width = "16rem";
	img.style.height = "16rem";
	img.src = "icon.png";

	page.appendChild(img);
}

main();