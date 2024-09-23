exports.homepage = (req, res) => {
    res.render('index'); // Renders the index.ejs view
};

exports.about = (req, res) => {
    res.render('about'); // Renders the about.ejs view
};

exports.contact = (req, res) => {
    res.render('contact'); // Renders the contact.ejs view
};

exports.gallery = (req, res) => {
    res.render('gallery'); // Renders the gallery.ejs view
};

exports.profile = (req, res) => {
    const username = req.params.username;
    res.render('profile', { username }); // Renders the profile.ejs view with username
};