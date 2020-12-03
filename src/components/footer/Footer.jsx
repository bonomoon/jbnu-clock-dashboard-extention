// css import
import styles from './Footer.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Footer(props) {
  const { renderLeftComponent, renderCenterComponent, renderRightComponent } = props;

  return (
    <header className={cx('app-footer')}>
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
  );
}

