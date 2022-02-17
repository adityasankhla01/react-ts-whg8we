import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LotteryInfo from './LotteryInfo.js';
export default function Lottery(props) {
  return (
    <>
      <Router>
        {/* player list , manager, send money, total lottery amount, lottery status,     manager section- selectwinner, sendPrize */}
        <h2> Welcome to online lottery on Ethereum Blockchain</h2>
        <p>
          Here are some rules- <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          There are no rules just have a metamask wallet and some Eth to spare
          and you are good to participate. Best Of Luck!
        </p>
        Manager is {props.manager}
        <h2> To participate please send 0.1 Eth to this address - prop</h2>
        <section>
          <Switch>
            <Route path="/lotteryInfo">
              <LotteryInfo />
            </Route>

            <button>
              <Link exact to="/lotteryInfo">
                {' '}
                Press to see lottery info{' '}
              </Link>
            </button>
          </Switch>
        </section>
      </Router>
    </>
  );
}
