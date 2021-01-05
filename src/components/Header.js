import { Link, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import Calculator from './Calculator';
import {withRouter,Route} from 'react-router-dom';

class Header extends Component {

	render() { 
		return ( 
			<div>
			<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<Link to={'/calculator'}>calc</Link>
      </header>
				<Switch>
					<Route path={'/calculator'} component={Calculator}/>
				</Switch>
			</div>
		 );
	}
}
 
export default withRouter(Header);

