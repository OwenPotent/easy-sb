"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBClient = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
var SBClient = /** @class */ (function () {
    function SBClient(options) {
        var _this = this;
        this.supabaseURL = options.supabaseURL;
        this.supabaseKey = options.supabaseKey;
        this.options = options.options;
        (function () {
            (0, supabase_js_1.createClient)(_this.supabaseURL, _this.supabaseKey, _this.options);
        })();
    }
    /**
     * Gets the given value from the given table
     *
     * @param table - SQL Table from Supabase Dashboard
     * @param value - Value used to find
     * @returns Given value
     */
    SBClient.prototype.get = function (table, value) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.from(table).select(value)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.data];
                }
            });
        });
    };
    /**
     * Gets all the value from the given table, and pushes it into an array
     *
     * @param table SQL Table from Supabase Dashboard
     * @returns All values from the table
     */
    SBClient.prototype.getAllValueFromTable = function (table) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.from(table)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.data];
                }
            });
        });
    };
    /**
     * Performs a "DELETE" method on the given table, that being deleting the given table from the Database
     *
     * @param table SQL Table from Supabase Dashboard
     */
    SBClient.prototype.delete = function (table) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.from(table).delete()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Performs an UPDATE on the table. Edits the value given
     *
     * @param table SQL Table from Supabase Dashboard
     * @param value Value to edit
     */
    SBClient.prototype.edit = function (table, values) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.from(table).update(values)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Performs an UPSERT into the table. Upserts a new value into the table.
     *
     * @param table SQL Table from Supabase Dashboard
     * @param values Value to insert
     */
    SBClient.prototype.upsert = function (table, values) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.from(table).upsert(values)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Performs an INSERT into the table. Inserts a new value into the table.
     *
     * @param table SQL Table from Supabase Dashboard
     * @param values Value to insert
     */
    SBClient.prototype.insert = function (table, values) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.from(table).insert(values)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SBClient;
}());
exports.SBClient = SBClient;
