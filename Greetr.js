(function(global, $){

    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLans = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLans.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.fullName() + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName() + '!';
        },

        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLGreet: function(selector, formal) {
            if (!$) {
                throw 'jQuery is not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector'
            }

            var msg;
            if (formal) {
                msg = this.greeting();
            } else {
                msg = this.formalGreeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language){

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    Greetr.init.prototype = Greetr.prototype;

    // attach to global object
    global.Greetr = global.G$ = Greetr;

}(window, jQuery))