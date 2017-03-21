import $ from 'jquery';

const renderMgrList = (containerId, mgrArrCleaned) => {
    const container = $(containerId);
    container.empty();
    const ul = $(`<ul class='list-group'></ul>`);
    // var lis = mgrArrCleaned.forEach(function(employee){
    //     ul.append(EmployeeView(employee, onAddRatingFor, onRemoveRatingFor));
    // });
}

export default renderMgrList;
