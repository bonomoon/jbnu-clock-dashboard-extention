// css import
import './Header.module.css';

export default function Header(props) {
  const { renderLeftComponent, renderCenterComponent, renderRightComponent } = props;

  return (
    <header className={'app-header'}>
        <div className={'left-content'}>
            {renderLeftComponent && renderLeftComponent()}
        </div>
        <div className={'center-content'}>
            {renderCenterComponent && renderCenterComponent()}
        </div>
        <div className={'right-content'}>
            {renderRightComponent && renderRightComponent()}
        </div>
    </header>
  );;
}

