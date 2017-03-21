import $ from 'jquery';
import renderMgrList from './renderMgrList';
import renderTeamList from './renderTeamList'

const getData = () => {
    $.get('/api/teams')
        .then( _state => {
            renderMgrList(_state);
            renderTeamList(_state, onSelectMgr, onMgrStatusChg);
        });
};

const onSelectMgr = (id, managerId) => {
    $.ajax({
        url: `/api/teams/${id}`,
        method: 'PUT',
        data: {managerId}
    })
    .then(() => getData());
};

const onMgrStatusChg = (id, status) => {
    $.ajax({
        url: `/api/teams/${id}`,
        method: 'PUT',
        data: {status}
    })
    .then(() => getData());
};

//initial loading of data:
getData();
