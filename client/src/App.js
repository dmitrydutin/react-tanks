import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Join from './components/Join/Join';
import TankInfo from './components/TankInfo/TankInfo';
import Statistics from './components/Statistics/Statistics';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AddTank from './components/AdminPanel/Add/Add';
import EditTank from './components/AdminPanel/Edit/Edit';
import DeleteTank from './components/AdminPanel/Delete/Delete';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/join' exact component={Join} />
                <Route path='/tanks/:id' exact component={TankInfo} />
                <Route path='/statistics' exact component={Statistics} />
                <Route path='/admin' exact component={AdminPanel} />
                <Route path='/admin/add' exact component={AddTank} />
                <Route path='/admin/edit' exact component={EditTank} />
                <Route path='/admin/delete' exact component={DeleteTank} />
                <Route component={Error} />
            </Switch>

            <Footer />
        </>
    );
};

export default App;
