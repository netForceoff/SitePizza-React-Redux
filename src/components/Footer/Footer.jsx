// @flow
import cn from 'classnames';
import Logo from "../Logo/Logo";
import React from 'react';
import styles from './Footer.less';

const orangeCN = cn([styles.footer__orangeText, styles.text__bolder]);
const phoneCN = cn([styles.phoneNumber, styles.text__bolder]);

export const Footer = () => (
	<footer>
		<div className={styles.content}>
			<div className={styles.footerContent__menu}>
				<div className={styles.footerLogo}>
					<Logo logo = {styles.footerLogoImg}/>
					<div className={styles.footerLogoSocial}>
						<a href="#" target="_blank"><img src="img/instagram.png" alt="Инстаграмм"/></a>
						<a href="#" target="_blank"><img src="img/vkontakte.png" alt="Вк"/></a>
					</div>
				</div>
				<div className={styles.footerPayCards}>
					<p>Принимаем к оплате</p>
					<ul>
						<li className={styles.masterCard__card_1}>Master Card</li>
						<li className={styles.masterCard__card_2}>Master Card</li>
						<li className={styles.visa__card_1}>Visa</li>
						<li className={styles.visa__card_2}>Visa</li>
						<li className={styles.belcart}>Belcart</li>
						<li className={styles.assist}>Assist</li>
					</ul>
				</div>
				<ul className={styles.footerMenu}>
					<li><a href="#">Оформление заказа</a></li>
					<li><a href="#">Оплата и доставка</a></li>
					<li><a href="#">Бонусная программа</a></li>
					<li><a href="#">О компании</a></li>
					<li><a href="#" className={styles.menu__active}>Связаться с руководством</a></li>
					<li><a href="#">Контакты</a></li>
				</ul>
				<div className={styles.footerWorktimeAndAddress}>
					<div className={styles.footerTime}>
						<span className={styles.workForYou}>Работаем для Вас</span> с <span
						className={orangeCN}>10:00</span> до <span
						className={orangeCN}>23:00</span>
					</div>
					<div className={styles.footerAddress}>
						<p>Пицерия "Наша пицца"</p>
						<p>г. Брест, ул. Пушкинская 23</p>
					</div>
				</div>
				<div className={styles.footerNumber}>
					<div className={phoneCN}>
						<a className="orange-text" href="tel:(8029)222-22-14">(8029) 222-22-14 </a>
						<span>без выходных</span>
					</div>
					<div className={styles.deliveryInCity}>
						<span>Доставка еды в </span><span className={styles.footer__orangeText}>Бресте</span>
					</div>
				</div>
			</div>
			<div className={styles.footerOrg}>
				<p>ООО "Вкусно и легко", Гос. регистрация от 17.03.2010 УНП: 290949615</p>
				<p>Администрацией Московского р-на г. Бреста. Зарегестрирован в Торговом реестре РБ 05.02.2018</p>
			</div>
			<div className={styles.footerCopy}>
				<p>&copy; 2011-2019 Наша Пицца. Все права защищены. <a href="">Разработка и продвижение сайта
					- <span>Adena</span></a></p>
			</div>
		</div>
	</footer>
);

export default Footer;
