const navBar = {
	items: [
		{
			name: "Главная",
			id: 0,
			img: '../../images/NavBar/home.svg',
			href: '/home',
			flag: false
		},
		{
			name: "Меню",
			id: 6,
			img: '../../images/NavBar/menu.svg',
			href: '/menu',
			flag: true
		},
		{
			name: "Профиль",
			id: 1,
			img: '../../images/NavBar/user.svg',
			href: '/user',
			flag: true
		},
		{
			name: "Заказ",
			id: 2,
			img: '../../images/NavBar/cart.svg',
			href: '/cart',
			flag: true
		},
		{
			name: "О нас",
			id: 3,
			img: '../../images/NavBar/aboutUs.svg',
			href: '/aboutUs',
			flag: true
		}
	],
};

export default navBar;
