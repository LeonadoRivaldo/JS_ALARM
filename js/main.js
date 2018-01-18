var clock = function() {
    this._date, this._clock;
    var _start = function() {
        this._clock = setInterval(function() {
            _date = new Date();
        }, 1000);
    }

    var _get = function() {
        return this._date;
    }

    return {
        iniciar: _start,
        verHora: _get
    };
}