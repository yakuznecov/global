const [navbar, setNavbar] = useState(false);

const stickyNavbar = () => {
	if (window.scrollY >= 50) {
		setNavbar(true);
	} else {
		setNavbar(false);
	}
};

useEffect(() => {
	window.addEventListener('scroll', stickyNavbar);
});
