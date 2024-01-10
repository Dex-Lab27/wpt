// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.canvas.host.size.attributes.reflect.setidl
// Description:Setting IDL attributes updates IDL and content attributes
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Setting IDL attributes updates IDL and content attributes");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  canvas.width = 120;
  canvas.height = 60;
  _assertSame(canvas.width, 120, "canvas.width", "120");
  _assertSame(canvas.height, 60, "canvas.height", "60");
  canvas.getAttribute('width') === 120;
  canvas.getAttribute('height') === 60;
  t.done();
});
done();
