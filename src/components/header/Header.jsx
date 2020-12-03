// css import
import styles from './Header.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Header(props) {
  const { renderLeftComponent, renderCenterComponent, renderRightComponent } = props;

  return (
    <header className={cx('app-header')}>
        <div className={cx('left-content')}>
            {renderLeftComponent && renderLeftComponent()}
        </div>
        <div className={cx('center-content')}>
            {renderCenterComponent && renderCenterComponent()}
        </div>
        <div className={cx('right-content')}>
            {renderRightComponent && renderRightComponent()}
        </div>
    </header>
  );;
}

