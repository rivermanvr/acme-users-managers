import $ from 'jquery';
import renderMgrList from './renderMgrList';
import renderTeamContainers from './renderTeamContainers'

const getData = () => {
    $.get('/api/teams')
        .then( _state => {
            renderMgrList(_state);
            renderTeamContainers(_state);
        });
};

const onSelectMgr = () => {
    $.ajax({
        url: `/api/teams/${id}`,
        method: 'PUT',
        data: {managerId}
    })
    .then(() => getData());
};

const onMgrStatusChg = () => {
    $.ajax({
        url: `/api/teams/${id}`,
        method: 'PUT',
        data: {status}
    })
    .then(() => getData());
};

//initial loading of data:
getData();
