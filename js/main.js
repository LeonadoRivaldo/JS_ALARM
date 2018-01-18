var clock = function() {
    var _date, _clock;
    var _start = function() {
        _clock = setInterval(function() {
            _date = new Date();
        }, 1000);
    }

    var _get = function() {
        return _date;
    }

    return {
        iniciar: _start,
        verHora: _get
    };
}