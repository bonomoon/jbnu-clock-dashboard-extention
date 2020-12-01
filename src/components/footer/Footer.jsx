// css import
import './Footer.module.css';

export default function Footer(props) {
  const { renderLeftComponent, renderCenterComponent, renderRightComponent } = props;

  return (
    <header className={'app-footer'}>
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
  );
}

