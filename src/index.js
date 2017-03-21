import $ from 'jquery';
import ManagerList from './ManagerList';

const state = {
    mgrRecords: []
}

const renderManagersList = () => {
    const containerId = '#managerList';
    const {managers, selected} = state;
    ManagerList({ containerId, mgrRecords})
};

$.get('/api/teams')
    .then( title => {
        console.log(title);
        state.mgrRecords = _mgrRecords;
        // renderManagersList();
    });
