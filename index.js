/**
 * XadillaX created at 2014 10:48
 *
 * Copyright (c) 2014 Huaban.com, all rights
 * reserved.
 */
"use strict";

var random = require("random");

var name = require("./lib/name");

var suffix = [
    "剑", "剑法", "剑谱", "剑诀",
    "枪", "枪法", "枪诀",
    "拳", "拳法", "拳谱",
    "刀", "刀法", "刀谱", "刀诀",
    "斩", "刺", "大法", "心诀", "心法", "诀", "宝典",
    "棍", "棍法", "棍谱", "棍诀",
    "指", "掌", "掌法", "腿", "攻", "钩"
];

exports.generate = function() {
    var len = suffix.length;
    var pre = name.get();

    return pre + suffix[random.int(0, len - 1)];
};
