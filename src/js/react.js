import cn from 'classnames';

// Несколько классов
<h1 className={cn(styles.header, styles.text)}>привет</h1>;

// Start: Смена видимого элемента

const [isVisible, setVisible] = useState(false);

const toggleVisibility = () => setVisible(!isVisible);

// End: Смена видимого элемента

// Появление элемента
<AnimatePresence exitBeforeEnter>
	{isVisible && (
		<motion.div
			key={selectedTab ? selectedTab.label : 'empty'}
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			{selectedTab ? selectedTab.icon : '😋'}
		</motion.div>
	)}
</AnimatePresence>;

// Позволяет не отображать шапку сайта на определенной странице
{
	!Component.hideHeader && <SiteHeader userInfoCookie={userInfoCookie} />;
}

// Для label for стили
{
	<label htmlFor='namedInput'>Name:</label>;
}
{
	<input id='namedInput' type='text' name='name' />;
}

// Класс active
{
	<div className={classNames('line', { active: activeOption === 'actor' })}></div>;
}

{
	<button
		className={classNames('cast__power-options-btn', { active: activeOption === 'actor' })}
		onClick={(e) => switchOption('actor', e)}
	>
		Я ищу актёров
	</button>;
}

// Toggle menu

const [isQuestionMenuOpen, setIsQuestionMenuOpen] = useState(false);

const toggleQuestionMenu = () => {
	setIsQuestionMenuOpen(!isQuestionMenuOpen);
};

{
	<li className={classNames('nav__list-item dropdown-question', { active: isQuestionMenuOpen })} ref={questionRef}>
		<button
			aria-label='question-button'
			className='nav__list-item-link question-button info_btn'
			style={{ color: questionColor }}
			onClick={toggleQuestionMenu}
		>
			<FormattedMessage id='information' />{' '}
		</button>
		<QuestionNav />
	</li>;
}

// Hover menu

const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);

<a href={''} className='nav__list-item-link' onMouseOver={() => setIsShowBurgerMenu(true)}>
	<FormattedMessage id='OPPORTUNITIES' />{' '}
</a>;

{
	isShowBurgerMenu && (
		<div className='burger__menu' onMouseLeave={() => setIsShowBurgerMenu(false)}>
			<p>Привет</p>
		</div>
	);
}

// Тарифы актеров
<a target='_self' href={`/${router.locale}/plans-agent`} className='nav__list-item-link'>
	<FormattedMessage id='rates' />{' '}
</a>;
