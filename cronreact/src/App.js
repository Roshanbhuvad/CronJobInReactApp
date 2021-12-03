import logo from './logo.svg';
import React from 'react'
import 'reactjs-crontab/dist/index.css'
import Crontab from 'reactjs-crontab'
import './App.css';
const styles = {
  text: {
    margin: '70px',
    color: 'skyblue'
  }
}

const HelloMsg = () => {
  return <h1 style={styles.text}>Hello!</h1>
}
const App = () => {
  const [open, setOpen] = React.useState(null)

  const sayHello = () => {
    setOpen(true)
  }
  const tasks = React.useMemo(
    () => [
      {
        fn: sayHello,
        config: '* * * * *'
        // this runs every minutes
      },
      {
        fn: sayHello,
        config: '* 13,14 10 4 *'
        // In April At 9AM and At 35 minute(s), 36 minute(s)
      }
    ],
    []
  )
  return (
    <div>
      <Crontab
        tasks={tasks}
        timeZone='UTC' // UTC timezone.
        dashboard={{
          hidden: false, // if true, dashboard is hidden
          route: '/' // dashboard will only appear in '/' route
        }}
      />
      {open && <HelloMsg />}
    </div>
  );
}

export default App;
