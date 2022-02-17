import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import lotterySC from './contracts/lotterySC.sol';

import Hello from './Hello';
import './style.css';
import Navbar from './Navbar.js';
import Lottery from './Lottery.js';
import Auction from './Auction.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {

  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [contractBalance, setContractBalance] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

   useEffect(() => {
    const init = async () => {
      const manager = await lotterySC.methods.manager().call();
      
      const balance = await web3.eth.getBalance(lotterySC.options.address);

      setManager(manager);
      
      setContractBalance(balance);
    };
    init();
  }, []);
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/lottery" manager={manager}>
              <Lottery />
            </Route>

            <Route path="/auction">
              <section>
                <Auction />
              </section>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
