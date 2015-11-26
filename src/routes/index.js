import React from 'react';
import { Router, Route } from 'react-router';

export default function configureRoutes(history, App) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  );
}
