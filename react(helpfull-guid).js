
 // ############ ADD / REMOVE CLASS ON ELEMENT CLICK ############
class App extends React.Component {
  // without map
  state = { active: '' } // nothing selected by default, but this is up to you...
  addActiveClass = (e) => {
    const clicked = e.target.id
    if (this.state.active === clicked) {
      this.setState({
        active: ''
      });
    } else {
      this.setState({
        active: clicked
      })
    }
  }
  render() {
    return (
      <div>
        <div 
          className={`item${this.state.active === "first"? ' active': ''}`} 
          id="first" 
          onClick={this.addActiveClass}
        >Hello</div>
        <div 
          className={`item${this.state.active === "second"? ' active': ''}`} 
          id="second" 
          onClick={this.addActiveClass}
        >Good Bye</div>
      </div>
    )
  }
// with map
  state = {
    activeId: null
  }
  
  handleClick(event, id) {
    this.setState({ activeId: id })
  }
  
  render() {
    <ul className="menu-list">
    {
      this.props.getList.map(list =>
        <Link key={ list.id }
              className={ this.state.activeId === list.id && 'is-active' }
              onClick={ this.handleClick.bind(this, list.id) } 
              to="">
          { list.title }
        </Link>                    
      )
    }
    </ul>
  }
}
export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ############### IMPORTINg SCRIPTS(JS, etc..) ###############

import { useEffect } from 'react';
const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};
export default useScript;

import useScript from 'hooks/useScript';
function App() {
  return (
    const MyComponent = (props) => {
      useScript('https://use.typekit.net/foobar.js');

      // rest of your component
    }
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ########### TOGGLED CLASS FOR MENU WHEN CLICKING ON BUTTON
function App() {
	
	const [ menuOpen, setMenuOpen ] = React.useState(false);
	
	return (
		<header>
			<div onClick={() => {setMenuOpen(o => !o)}}>btn</div>
			<nav id="nav" className={`header__nav ${menuOpen ? ' hidden' : ''}`}>
				nav
			</nav>
		</header>
	)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////