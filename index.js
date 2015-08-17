
module.exports = function(request){
  var Request = request.Request;
  var end     = Request.prototype.end;
  Request.prototype.thunkify = thunkify(end);
  return request;
}
