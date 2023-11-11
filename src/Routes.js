import { Routes as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/new" element={<NewContact />} />
      <Route exact path="/edit/:id" element={<EditContact />} />
    </Router>
  );
}
