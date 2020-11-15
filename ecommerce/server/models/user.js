const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const userSchema = new Schema({

    userName: { type: String, min: [4, 'Too short,min is 4 charracters'], max: [32, 'Too long,max is 32 charracters'] },
    email: {
        type: String,
        min: [4, 'Too short,min is 4 charracters'],
        max: [32, 'Too long,max is 32 charracters'],
        unique: true,
        lowercase: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [4, 'Too short,min is 4 charracters'],
        max: [32, 'Too long,max is 32 charracters'],    
        required: 'Password is required'
       
    }
    ,
    rentals:[{type:Schema.Types.ObjectId, ref: 'Rental'}]
    
});

userSchema.methods.hasSamePassword = function (requestedPassword) {
    return bcrypt.compareSync(requestedPassword, this.password);
}

userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB. 
            user.password = hash;
            next();
        });
    });
    
})

module.exports = mongoose.model('User', userSchema);