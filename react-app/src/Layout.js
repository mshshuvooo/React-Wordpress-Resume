import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PwaContext } from './PwaContext';
import Sidebar from './components/sidebar/Sidebar';
import AboutMe from './components/aboutMe/AboutMe';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import NotFound from './components/notFound/NotFound';

const Layout = () => {
    const [pwaData] = useContext(PwaContext);
    const pwaWrapperStyle = {
        backgroundImage: `url(${pwaData?.general?.bodyTopBg}), url(${pwaData?.general?.bodyBottomBg})`,
    }
    return (
      <Router>
        <div style={pwaWrapperStyle} className="pwa-wrapper">
         
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
              <Nav/> 
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <Sidebar />
              </div>
              <div className="col-lg-8">
                    <Switch>
                      <Route path="/" exact component={AboutMe} />
                      <Route path="/resume" exact component={Resume} />
                      <Route path="/services" component={Services} />
                      <Route path="/portfolio" component={Portfolio} />
                      <Route path="/contact" component={Contact} />
                      <Route path="*" component={NotFound} />
                    </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
};

export default Layout;