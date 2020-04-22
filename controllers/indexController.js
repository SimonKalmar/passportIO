exports.frontpage = function (req, res) {
    res.render('index', {
        title: 'Demoing PassportJS',
        subtitle: 'Inspired by Traversy'
    });
};

exports.butts = function (req, res) {
    res.render('butts', {
        title: 'I like butts',
        subtitle: 'Inspired by Traversy'
    });
};

exports.dashboard = function (req,res) {
    res.render('dashboard', {
        title: 'Demoing PassportJS',
        subtitle: 'Here\'s What We Do:',
        user: req.user
    });
};
