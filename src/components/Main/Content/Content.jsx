// @flow
import ContentList from 'components/Main/Content/ContentList';
import ContentListRolls from 'components/Main/Content/ContentListRolls';
import React, {Fragment} from 'react';
import styles from './Content.less';

export const Content = () => (
	<Fragment>
	<section>
		<h2>Популярные пиццы</h2>
		<ContentList />
		<div className={styles.viewAll}>
			<a href="#">Смотреть все</a>
		</div>
	</section>
		<section>
			<div className={styles.content}>
				<h2>Популярные роллы</h2>
				<ContentListRolls/>
				<div className={styles.viewAll}>
					<a href="#">Смотреть все</a>
				</div>
			</div>
		</section>
	</Fragment>
);

export default Content;
