'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
  const data = await Order.find({})
    .populate('customer', 'name')
    .populate('items.product', 'title');
  return data;
};

exports.create = async data => {
  var order = new Order(data);
  await order.save();
};

exports.getById = async id => {
  const res = await Order.findById(id);
  return res;
};
