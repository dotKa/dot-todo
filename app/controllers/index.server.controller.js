exports.render = function(req, res) {
    res.render('index', {
    	title: 'dot-ToDo',
    	user: req.user ? req.user.username : '',
    	username: req.user ? req.user.name : '',
    	userid:req.user ? req.user._id : ''
    });
};
