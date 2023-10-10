const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const navbar = document.getElementById('navbar');
		if (entry.isIntersecting) {
			navbar.classList.remove('nav-solid');
			// navbar.classList.add('nav-transparent');
		} else {
			// navbar.classList.remove('nav-transparent');
			navbar.classList.add('nav-solid');
		}
	});
});

export default intersectionObserver;
