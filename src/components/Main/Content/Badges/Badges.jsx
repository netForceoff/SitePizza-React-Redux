// @flow
import cn from 'classnames';
import React from 'react';
import styles from "../ContentList/ContentList.less";
import type {Props} from './flow';

const labels = {
	best: 'Хит',
	forKids: 'Детская',
	new: 'Новое',
	pepper: 'Перец',
	red: 'Акция'
};

export const Badges = (props: Props) => {
	const {badges} = props;

	return (
		<ul className={styles.product__badges}>
			{Object.keys(badges).map((item, index) => {
					const classes = cn({
						[styles.badge]: true,
						[styles.badge_best]: item === 'best' && badges.best,
						[styles.badge_forKids]: item === 'forKids' && badges.forKids,
						[styles.badge_new]: item === 'new' && badges.new,
						[styles.badge_pepper]: item === 'pepper' && badges.pepper,
						[styles.badge_red]: item === 'red' && badges.red
					});
					return	<li key={index} className={classes}>{labels[item]}</li>
			}
				)}
		</ul>
	)
};

export default Badges;
