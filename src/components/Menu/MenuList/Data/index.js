// @flow
import styles from "../MenuList.less";

export const links = [
	{to: "/pizza", label: 'Пиццы', className: styles.mainMenu__pizza, exact: false, testId: 'pizza'},
	{to: "/rolls", label: 'Роллы', className: styles.mainMenu__rolls, exact: false},
	{to: "/snacks", label: 'Закуски', className: styles.mainMenu__snacks, exact: false},
	{to: "/soups", label: 'Супы', className: styles.mainMenu__soup, exact: false},
	{to: "/combo", label: 'Комбо обеды', className: styles.mainMenu__combo, exact: false},
	{to: "/deserts", label: 'Десерты', className: styles.mainMenu__deserts, exact: false},
	{to: "/drinks", label: 'Напитки', className: styles.mainMenu__drinks, exact: false},
	{to: "/souses", label: 'Соусы', className: styles.mainMenu__sous, exact: false}
];
