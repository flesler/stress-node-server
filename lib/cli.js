var stress = require('stress-node'),
  util = require('util');

module.exports = function(opts) {
  var url = opts._[0];

  print('Stress testing %s...', url);

  stress({
    url:url,
    method: opts.method,
    amount: opts.amount,
    concurrent: opts.concurrent,
    data: opts.data,
    progress: progress
  }, function(report) {
    var ratio = report.ok / report.total;
    var secs = (report.end - report.start) / 1000;
    var avg = secs / report.total;

    line();
    line();
    print('-- Report:');
    
    line();
    print('Success: %d/%d (%d%)', report.ok, report.total, ratio * 100);
    print('Took: %ds (avg %ds p/request)', secs.toFixed(2), avg.toFixed(2));

    line();
    print('Responses:');
    report.responses.forEach(function(res){
      print('- Status %d (%d times)', res.status, res.amount);
    });

    line();
    print('Errors:');
    report.errors.forEach(function(err){
      print('- Type %s (%d times)', err.code, err.amount);
    });

    process.exit();
  });


  function progress(report) {
    var ratio = Math.floor(report.completed / report.total * 100);
    var out = util.format('Stressing: %d/%d (%d%)', report.completed, report.total, ratio);

    clearLine();
    util.print(out);
  }
};

function print(msg, newLine) {
  var out = util.format.apply(util, arguments);
  util.puts(out);
}

function line() {
  util.puts('');
}

function clearLine() {
  util.print(Array(30).join('\b'));
}
