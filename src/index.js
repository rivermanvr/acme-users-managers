import $ from 'jquery';
import mgrList from './mgrList';
import teamList from './teamList'

const getData = () => {
    $.get('/api/teams')
        .then( _state => {
            mgrList(_state);
            teamList(_state, onSelectMgr, onMgrStatusChg);
        });
};

const onSelectMgr = (id, managerId) => {
    $.ajax({
        url: `/api/teams/${id}/${managerId}`,
        method: 'PUT',
        data: { managerId: managerId }
    })
    .then(() => getData());
};

const onMgrStatusChg = (id) => {
    $.ajax({
        url: `/api/managers/${id}`,
        method: 'PUT'
    })
    .then(() => getData());
};

//initial loading of data:
getData();
