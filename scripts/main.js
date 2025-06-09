const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			console.log(entry.intersectionRatio);
			if (entry.intersectionRatio >= 0.5) {
				console.log("true");
				entry.target.classList.add("visible");
			}
		});
	},
	{
		threshold: [0, 0.5, 1.0],
	}
);

document
	.querySelectorAll(".service-discription-container")
	.forEach((section) => {
		observer.observe(section);
	});
