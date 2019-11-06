define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'goods_attr/index' + location.search,
                    add_url: 'goods_attr/add',
                    edit_url: 'goods_attr/edit',
                    del_url: 'goods_attr/del',
                    multi_url: 'goods_attr/multi',
                    table: 'goods_attr',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name')},
                        {field: 'image', title: __('Image'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'category_id', title: __('Category_id')},
                        {field: 'put_price', title: __('Put_price'), operate:'BETWEEN'},
                        {field: 'num', title: __('Num')},
                        {field: 'specifications', title: __('Specifications')},
                        {field: 'retail_price', title: __('Retail_price'), operate:'BETWEEN'},
                        {field: 'convention_price', title: __('Convention_price'), operate:'BETWEEN'},
                        {field: 'is_adjust', title: __('Is_adjust'), searchList: {"0":__('Is_adjust 0'),"1":__('Is_adjust 1')}, formatter: Table.api.formatter.normal},
                        {field: 'shielding_customer_type_id', title: __('Shielding_customer_type_id')},
                        {field: 'warehouse_id', title: __('Warehouse_id')},
                        {field: 'put_time', title: __('Put_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'category.name', title: __('Category.name')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});