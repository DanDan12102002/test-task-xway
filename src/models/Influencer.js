"use strict";
exports.__esModule = true;
var Influencer = /** @class */ (function () {
    function Influencer(args) {
        var _a = args.id, id = _a === void 0 ? null : _a, name = args.name, fullName = args.fullName, profileUrl = args.profileUrl, avatarUrl = args.avatarUrl, followers = args.followers, er = args.er;
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.profileUrl = profileUrl;
        this.avatarUrl = avatarUrl;
        this.followers = followers;
        this.er = er;
    }
    return Influencer;
}());
exports["default"] = Influencer;
