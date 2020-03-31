import React, { Component } from 'react';
import { Route } from 'react-router';
import { Configuration } from './components/Configuration';
import { ConfigureDatabase } from './components/ConfigureDatabase';
import './components/Custom.css';
import { EntityMapping } from './components/EntityMapping';
import { ExportData } from './components/ExportData';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { ResultGraph } from './components/ResultGraph';

import { Spa_Main } from './components/Spa_Main';
import './components/Spa_Main.css';
import { UploadFile } from './components/UploadFile';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route path='/' component={Home} />
            <Route path='/UploadFile' component={UploadFile} />
            <Route path='/EntityMapping' component={EntityMapping} />
            <Route path='/ConfigureDatabase' component={ConfigureDatabase} />
            <Route path='/Configuration' component={Configuration} />
            <Route path='/ExportData' component={ExportData} />
            <Route path='/ResultGraph' component={ResultGraph} />
            <Route path='/Spa_Main' component={Spa_Main} />
      </Layout>
    );
  }
}