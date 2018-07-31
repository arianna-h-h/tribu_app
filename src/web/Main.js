import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { TrailsPage } from './TrailsPage';
import { EmergencyPage } from './EmergencyPage';
import { CalendarPage } from './CalendarPage';
import { StorePage } from './StorePage';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/trails' component={TrailsPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/store' component={StorePage} />
      <Route exact path='/emergency' component={EmergencyPage} />
      <Route exact path='/emergency' component={CalendarPage} />
    </Switch>
  </main>
);
