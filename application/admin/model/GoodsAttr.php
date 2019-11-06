<?php

namespace app\admin\model;

use think\Model;


class GoodsAttr extends Model
{

    

    

    // 表名
    protected $name = 'goods_attr';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'is_adjust_text',
        'put_time_text'
    ];
    

    
    public function getIsAdjustList()
    {
        return ['0' => __('Is_adjust 0'), '1' => __('Is_adjust 1')];
    }


    public function getIsAdjustTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['is_adjust']) ? $data['is_adjust'] : '');
        $list = $this->getIsAdjustList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getPutTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['put_time']) ? $data['put_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setPutTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


    public function category()
    {
        return $this->belongsTo('Category', 'category_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
