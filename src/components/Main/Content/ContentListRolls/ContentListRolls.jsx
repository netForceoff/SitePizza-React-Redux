// @flow
import cn from 'classnames';
import React from 'react';
import {state} from './Data';
import styles from '../ContentList/ContentList.less';
import type {ListItem} from '../ContentList/flow'

const badgeCN = cn([styles.badge, styles.badge_best]);
const propsCN = cn([styles.product__props, styles.props__roll]);

export const ContentListRolls = () => (
	<ul className={styles.products}>
		{state.map((item: ListItem, index) => {
			const {action, img, text} = item;
			return (
				<li key={index} className={styles.product}>
					<a href={action.url} className={styles.product__link}>
						<img src={img.src} alt={img.alt}/>
						<span className={styles.product__type}>{text.type}</span> <span className={styles.product__title}>"{text.title}"</span>
					</a>
					<span className={styles.product__ingredients}>
              {text.ingredients}
            </span>
					<ul className={styles.product__badges}>
						<li className={badgeCN}>Хит</li>
					</ul>
					<span className={propsCN}>200 г.</span>
					<button className={styles.product__add}>
						8.20 руб.
					</button>
					<br className="br"/>
					<button className={styles.product__quickOrder}>Быстрый заказ</button>
				</li>
			)
		})}
	</ul>
);

export default ContentListRolls;
