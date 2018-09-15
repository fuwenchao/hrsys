$(function(){
    $('#treeview').treeview({
        data: getMechTree(),
        levels: 5,
        multiSelect: false,
        onNodeSelected: function(env, data){
            alert(data.id);
        }
    });
});
// 机构树形菜单
function getMechTree() {
    return [{
        text: "雅安市农村信用社",
        tags:
            ['available'],
        nodes: [
            { text: " p1-1", id: '00001', icon:"glyphicon glyphicon-user"},
            { text: " p1-2", id: '00002', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-3", id: '00003', icon:"glyphicon glyphicon-user"},
            { text: " p1-4", id: '00004', state: {expanded: false},
                nodes: [
                    { text: ' p1-1-1', id: '00005', icon:"glyphicon glyphicon-user"},
                    { text: ' p1-1-2', id: '00006', icon:"glyphicon glyphicon-user"}
                ]
            }]
    }];
}

function getPostTree() {
    return [{
        text: "董事长",
        tags:
            ['available'],
        nodes: [
            { text: " 部长", id: '00001', icon:"glyphicon glyphicon-user"},
            { text: " 总经理", id: '00004', state: {expanded: false},
                nodes: [
                    { text: ' 科长', id: '00005', icon:"glyphicon glyphicon-user"},
                    { text: ' 组长', id: '00006', icon:"glyphicon glyphicon-user"}
                ]
            }]
    }];
}

function changeTreeInfo(name){
    var dataArr;
    if("post" == name){
        dataArr = getPostTree();
    }else if("mech"== name){
        dataArr = getMechTree();
    }
    $('#treeview').treeview({
        data: dataArr
    });
}