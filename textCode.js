
// 绑定默认值
function Defint(DEFINE, INPUT) {
    var RESULT = {};
    for (var vlaue in DEFINE) {
        RESULT[vlaue] = DEFINE[vlaue];
    }
    for (var vlaue in INPUT) {
        RESULT[vlaue] = INPUT[vlaue];
    }
    return RESULT;
}

function TextCodeMore(DATA) {
    var ERRORFLAG = false;
    if (DATA["DEMO"] == undefined || DATA["ADDTEXT"] == undefined) {
        ERRORFLAG = true;
    }
    DATA = Defint({ BEFOREFUNCTION: undefined, AFTERFUNCTION: undefined, CENTERFUNCTION: undefined, CLEARFLAG: false, CHANGETIME: 100, TEXTKIND: true, CODECOLOR: ["palegreen", "paleturquoise", "tomato", "palevioletred", "teal", "pink", "hotpink"] }, DATA)
    function GETCODE() {
        if (DATA.CODETEXT == undefined) {
            return String.fromCharCode(Math.floor(Math.random() * parseInt("9FA5", 16) + parseInt("4E00", 16)));
        } else {
            DATA.CODETEXT[Math.floor(Math.random() * DATA.CODETEXT.length)];
        }
    }
    var THISFLAG = true; // 防止多次调用
    this.run = function () {
        if (THISFLAG && !ERRORFLAG) {
            typeof DATA.BEFOREFUNCTION == "function" ? DATA.BEFOREFUNCTION() : "";
            var NUM = DATA.TEXTKIND ? 0 : DATA.ADDTEXT.length;
            THISFLAG = false;
            DATA.CLEARFLAG ? $(DATA.DEMO).html("") : "";
            var AFTER = $("<span></span>");
            $(DATA.DEMO).append(AFTER);
            (function ADDTEXTFUNCTION () {
                if (DATA.TEXTKIND ? NUM < DATA.ADDTEXT.length : NUM >= 0) {
                    AFTER.html(typeof DATA.CENTERFUNCTION == "function" ? DATA.CENTERFUNCTION(DATA.ADDTEXT[NUM], GETCODE()) : GETCODE())
                    DATA.TEXTKIND ? AFTER.before(DATA.ADDTEXT[NUM++]) : AFTER.after(DATA.ADDTEXT[NUM--]);
                    AFTER.css('color', DATA.CODECOLOR[Math.floor(Math.random() * DATA.CODECOLOR.length)]);
                    setTimeout(() => { ADDTEXTFUNCTION(); }, DATA.CHANGETIME);
                } else { AFTER.remove(); THISFLAG = true; typeof DATA.AFTERFUNCTION == "function" ? DATA.AFTERFUNCTION() : ""; }
            })();
        }
    }
};