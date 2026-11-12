import "../css/main.css";
import { loadHTML } from "./util";

async function main() {
	const page = document.querySelector("#app");

	if (!page)
		throw new Error("Page not found.");

	page.innerHTML = await loadHTML(new URL("../html/home.html", import.meta.url));

	let active = false;

	document.addEventListener("click", function(event: MouseEvent) {
		var link = (event.target as HTMLAnchorElement).closest(".mergald-action");
		if (!link) return;
		event.preventDefault();
		if (active) return;
		active = true;

		var page = document.querySelector(".mergald-page");
		if (!page) return;
		var d = document.createElement("div");
		d.className = "mergald-dialog";
		d.innerHTML = "Can't do that right now.";
		var cr = link.getBoundingClientRect();
		d.style.left = (cr.left + window.scrollX) + "px";
		d.style.top = (cr.top + window.scrollY + 16) + "px";
		page.appendChild(d);
		setTimeout(function() {
			d.remove();
			active = false;
		}, 3000);
	});
}

main();