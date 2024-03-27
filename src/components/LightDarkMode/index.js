import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    buttonOn: false,
    classname: 'darkbg',
    h1className: 'wh1',
    buttontext: 'Light Mode',
  }

  buttonClicked = () => {
    this.setState(pevstate => ({
      buttonOn: !pevstate.buttonOn,
      classname: 'whitebg',
      h1className: 'bh1',
      buttontext: 'Dark Mode',
    }))
  }

  rendor() {
    const {classname, h1className, buttontext} = this.state
    return (
      <div className="bgw">
        <div className={classname}>
          <h1 className={h1className}>Click To Change Mode</h1>
          <button
            className="btnclassname"
            type="button"
            onClick={this.buttonClicked}
          >
            {buttontext}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
