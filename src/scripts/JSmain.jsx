import $ from "jquery";
//import CommonBuildParams from "../../scripts/JSmain";

export default function CommonBuildParams(items) {
  if (items === undefined) {
    return;
  }
  if (items.length <= 0) {
    return;
  }

  var allparams = "";
  $.each(items, function(name, value) {
    //allparams = value;
    allparams +=
      CommonScramble(constStartName) +
      CommonScramble(name) +
      CommonScramble(constNameEnd) +
      CommonScramble(constValueStart) +
      CommonScramble(CommonMapChars(value)) +
      CommonScramble(constValueEnd);
  });
  return allparams;

  var mocker1 = "";
  var mocker2 = "";
  for (var i = 0; i < 20; i++) {
    mocker1 += CommonScramble(CommonMakeGUID());
    mocker2 += CommonScramble(CommonMakeGUID());
  }

  var _return = "";
  _return =
    mocker1 +
    CommonScramble(constParamStart) +
    allparams +
    CommonScramble(constParamEnd) +
    mocker2;

  return _return;
}

function CommonScramble(input) {
  var _return = "";

  _return = CommonLoopScramble(input, map0, map1, map2);
  return _return;
}

function CommonLoopScramble(input, map0, map1, map2) {
  var _return = "";
  var temp = "";

  for (var a = 0; a < input.length; a++) {
    for (var b = 0; b < map0.length; b++) {
      if (input[a] == map1[b]) {
        temp += map2[b];
        break;
      }
    }
  }

  var temp2 = "";

  for (var a = 0; a < temp.length; a++) {
    for (var b = 0; b < map0.length; b++) {
      if (input[a] == map1[b]) {
        temp2 += map0[b];
        break;
      }
    }
  }

  _return = temp2;

  return _return;
}
function CommonMakeGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

var mapchars = " _";
var map0 =
  mapchars + "BDFHJLNPRTVXZbdfhjlnprtvxz13579ACEGIKMOQSUWYacegikmoqsuwy02468";
var map1 =
  "13579bdfhjlnprtvxzBDFHJLNPRTVXZ02468acegikmoqsuwyACEGIKMOQSUWY" + mapchars;
var map2 =
  mapchars + "ywusqomkigeca13579YWUSQOMKIGECAzxvtrpnljhfdb02468ZXVTRPNLJHFDB";

var constParamStart = "StartParam";
var constParamEnd = "ParamEnd";

var constStartName = "StartName";
var constNameEnd = "EndName";

var constValueStart = "ValueStart";
var constValueEnd = "ValueEnd";

function CommonMapChars(input) {
  var _return = "";

  var _charsMap = {
    "~": "_00",
    "!": "_01",
    "@": "_02",
    "#": "_03",
    $: "_04",
    "%": "_05",
    "^": "_06",
    "&": "_07",
    "*": "_08",
    "(": "_09",
    ")": "_10",
    _: "_11",
    "+": "_12",
    "=": "_13",
    "-": "_14",
    "`": "_15",
    "[": "_16",
    "]": "_17",
    "\\": "_18",
    "{": "_19",
    "}": "_20",
    "|": "_21",
    ";": "_22",
    "'": "_23",
    ":": "_24",
    '"': "_25",
    "<": "_26",
    ">": "_27",
    "?": "_28",
    ",": "_29",
    ".": "_30",
    "/": "_31"
  };

  var replacer = "";
  var currentChar = "";

  for (var i = 0; i < input.length; i++) {
    $.each(_charsMap, function(name, value) {
      if (input[i] == name) {
        replacer += value;
        currentChar = name;
      }
    });

    replacer += input[i].replace(currentChar, "");
  }

  _return = replacer;

  return _return;
}
