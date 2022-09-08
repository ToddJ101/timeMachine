// import { h } from 'preact'
import { h, Component } from 'preact'
import style from './style.css';

class Clock extends Component {
  state = { time: Date.now() };

  d = new Date(); //object of date()

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ 
        time: Date.now()
      });
    }, 1000);
  }

  render() {
    // console.log(this.state);
    let date = new Date(this.state.time).toDateString();
    let time = new Date(this.state.time).toLocaleTimeString();
    let hourRaw = new Date(this.state.time).getHours();
    let minRaw = new Date(this.state.time).getMinutes();
    let secRaw = new Date(this.state.time).getSeconds();
    let hour = 30 * hourRaw + minRaw / 2;
    let min = 6 * minRaw;
    let sec = 6 * secRaw;
    
    // console.log('this.state.time: ', this.state.time);
    // console.log('hour: ', hour);
    // console.log('min: ', min);
    // console.log('sec: ', sec);
    
    return (
      <>
        <div class={style.container} >
          <div class={style.clockContainer}>
            <div class={style.hour} style={`transform: rotate(${hour}deg);`} />
            <div class={style.minute} style={`transform: rotate(${min}deg);`} />
            <div class={style.second} style={`transform: rotate(${sec}deg);`} />
          </div>
        </div>
        <br />
        <div>{time}<br />{date}</div>
      </>
   )
  }
}

export default Clock