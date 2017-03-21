import $ from 'jquery';

const mgrButton = (member) => {
    let btn = $(`<button class="btn btn-default">
        <span class="glyphicon glyphicon-hand-up" aria-hidden="true">
        </span></button>`);
    if (member.isMgr) {
        btn.text(`remove as Manager`);
    } else {
        btn.text(`Promote to Manager`);
    }
    btn.on('click', function () {
        onMgrStatusChg(member.id, !member.isMgr);
    })
    let btnContainer = $(`<div class="form-group"></form>`);
    btnContainer.append(btn);
    return btnContainer;
}

export default mgrButton;
