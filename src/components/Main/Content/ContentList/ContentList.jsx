// @flow
import {Badges} from 'components/Main/Content/Badges/Badges';
import React, {Component} from 'react';
import {state} from './Data';
import styles from './ContentList.less';
import type {ListItem} from './flow';

export class ContentList extends Component<{}> {
	render() {
		return (
			<ul className={styles.products}>
				{state.map((item: ListItem, index: number) => {
					const {action, img, text} = item;
					return (
						<li key={index} className={styles.product}>
							<a href={action.url} className={styles.product__link}>
								<img src={img.src} alt={img.alt}/>
								<span className={styles.product__type}>{text.type}</span><span
								className={styles.product__title}>{text.title}</span>
							</a>
							<span className={styles.product__ingredients}>
						{text.ingredients}
          </span>
							<Badges badges={text.badges}/>
							<span className={styles.product__props}>{text.props}</span>
							<button className={styles.product__add}>
								{text.add}
							</button>
							<br className="br"/>
							<button className={styles.product__quickOrder}>{text.quickOrder}</button>
						</li>
					)
				})}
			</ul>
		);
	}
}
export default ContentList;
