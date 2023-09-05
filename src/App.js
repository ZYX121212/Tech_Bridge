import classes from './App.module.css'
import Content from './layout/Content';
import MainMenu from './layout/MainMenu';
function App() {
  return (
    <div className={classes.layout}>

      <div className={classes.nav}>
        <MainMenu></MainMenu>
      </div>

      <div className={classes.empty}></div>
      
      <div className={classes.content}>
        <Content></Content>
      </div>

    </div>
  );
}

export default App;
