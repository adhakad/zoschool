'use strict';

module.exports = app => {
    app.use('/v1/school',require('./modules/routes/school'));
    app.use('/v1/admin', require('./modules/routes/users/admin-user'));
    app.use('/v1/student-user', require('./modules/routes/users/student-user'));
    app.use('/v1/teacher-user', require('./modules/routes/users/teacher-user'));
    app.use('/v1/ads', require('./modules/routes/ads'));
    app.use('/v1/banner', require('./modules/routes/banner'));
    app.use('/v1/class', require('./modules/routes/class'));
    app.use('/v1/class-subject', require('./modules/routes/class-subject'));
    app.use('/v1/student', require('./modules/routes/student'));
    app.use('/v1/subject', require('./modules/routes/subject'));
    app.use('/v1/teacher', require('./modules/routes/teacher'));
    app.use('/v1/testimonial', require('./modules/routes/testimonial'));
    app.use('/v1/topper', require('./modules/routes/topper'));
    app.use('/v1/notification', require('./modules/routes/notification'));
    app.use('/v1/exam-result', require('./modules/routes/exam-result'));
    app.use('/v1/exam-result-structure',require('./modules/routes/exam-result-structure'));
    app.use('/v1/fees', require('./modules/routes/fees-collection'));
    app.use('/v1/fees-structure', require('./modules/routes/fees-structure'));
    app.use('/v1/admit-card-structure', require('./modules/routes/admit-card-structure'));
    app.use('/v1/admit-card', require('./modules/routes/admit-card'));
    app.use('/v1/issued-transfer-certificate', require('./modules/routes/issued-transfer-certificate'));
    app.use('/v1/payment', require('./modules/routes/payment'));
};