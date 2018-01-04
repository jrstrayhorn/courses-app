// this component handles the App template used on every page
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route exact path="/course/" component={ManageCoursePage} />
            <Route path="/course/:id" component={ManageCoursePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
