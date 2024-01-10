// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.canvas.host.readonly
// Description:offscreencanvas is readonly
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("offscreencanvas is readonly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var canvas2 = new OffscreenCanvas(100, 50);;
  var d = ctx.canvas;
  _assertDifferent(canvas2, d, "canvas2", "d");
  ctx.canvas = canvas2;
  _assertSame(ctx.canvas, d, "ctx.canvas", "d");
  t.done();
});
done();
