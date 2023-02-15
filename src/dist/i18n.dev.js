"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _i18next["default"] // load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
.use(_i18nextHttpBackend["default"]) // detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(_i18nextBrowserLanguagedetector["default"]) // pass the i18n instance to react-i18next.
.use(_reactI18next.initReactI18next) // init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  fallbackLng: ['en', 'ind', 'kh', 'kr'],
  debug: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default

  }
});

exports["default"] = _default;