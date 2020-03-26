import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HelloProps, MapStateToPropsTypes, MapDispatchToPropsTypes } from './types';
import { changeTitle } from '../../../redux/hello/actions';
import { HelloActions } from '../../../redux/hello/types';
import { AppState } from '../../../redux/store';
import styles from './styles.module.scss';
import themes from '../../../constants/themes';
import { useTheming } from '../../../config/theme';
import logoW3 from '../../assets/w3Logo.png';

export const Home: React.FC<HelloProps> = (props: HelloProps) => {
  const { title, changeTitleAction } = props;
  const [theme, changeTheme] = useTheming();
  const handleClick = React.useCallback(() => {
    changeTitleAction('world');
  }, [changeTitleAction]);
  const handleThemeChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value);
  }, [changeTheme]);
  return (
    <div className={styles.homeContainer}>
      <img src={logoW3} alt="Logo" />
      <div className={styles.optionsExamples}>
        <button id="home-id" type="button" className={styles.button} onClick={handleClick}>
          {title}
        </button>
        <select
          id="theme-select"
          value={theme}
          onChange={handleThemeChange}
        >
          {
            Object.keys(themes).map(
              (key: string) => <option key={key} value={themes[key]}>{key}</option>,
            )
          }
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  title: state.hello.title,
});

const mapDispatchToProps = (dispatch: Dispatch<HelloActions>) => ({
  changeTitleAction: (title: string) => dispatch(changeTitle(title)),
});

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
