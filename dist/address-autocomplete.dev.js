"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  /**
   Declare the template here so it can be re-used by multiple instances of the element.
   Cloning from the template instead of using innerHTML is more performant since the markup
   is only parsed once.
   */
  var template = document.createElement('template');
  styles = "\n        <style>\n            :host {\n                display: inline-block;\n                font-family: var(--searchBox-font-family, sans-serif);\n                font-size: var(--searchBox-font-size, 1rem);\n                display: block;\n                width: auto;\n            };\n            .counter {\n                color: indigo;\n                font-size: 60pt;\n                font-family: sans-serif;\n                text-align: center;\n            }\n            .counter:hover {\n                cursor: pointer;\n            }           \n            .counter-disabled {\n                color: gray;\n            }\n\n            #searchBox {\n                background: var(--searchBox-normal-bg-color, none);\n                border: var(--searchBox-normal-border, none);\n                border-bottom: var(--searchBox-normal-border-bottom, 1px solid silver);\n                border-radius: var(--searcBox-normal-border-radius, 0px);\n                display: inline-block;\n                height: 24px;\n                flex: 9 auto;\n                padding-left: 0.5rem;\n                transition: all 0.25s ease;\n            }\n\n            #searchBox.recording {\n                background: var(--searchBox-recording-bg-color, #ffd6d6);\n                border: var(--searchBox-recording-border, none);\n                border-bottom: var(--searchBox-recording-border-bottom, 1px solid red);\n                border-radius: var(--searcBox-recording-border-radius, 0px);\n                color: var(--searchBox-recording-color, black);\n                display: inline-block;\n                height: 24px;\n                flex: 20 auto;\n                padding-left: 0.5rem;\n                transition: all 0.25s ease;\n            }\n            #microphoneIcon{\n                fill: var(--searchBox-normal-microphoneIcon-fill, black);\n            }\n            #microphoneIcon.recording{\n                fill: var(--searchBox-recording-microphoneIcon-fill, red);\n            }\n            #inputGroup {\n                display: flex;\n            }\n            .icon{\n                display: none;\n            }\n            span{\n                margin-right: 2rem;\n            }\n            #dictate {\n                float: right;\n                width: 24px;\n                max-width: 24px;\n            }\n            #recommendedaddresslist {\n              height: auto;\n              width: 100%;\n            }\n            #recommendedaddresslist option{\n                list-style-type: none;\n                margin-bottom: 0.5rem;\n            }\n        </style>";
  template.innerHTML = styles + "\n        <slot></slot>\n        <span id=\"value\" class=\"counter counter-disabled\"></span>\n        <div id=\"inputGroup\">\n      <input id=\"searchBox\" name=\"recommendedaddresslist\" placeholder=\"please enter Address\" value=\"\" list=\"recommendedaddresslist\">\n      <span id=\"dictate\">\n        <object>\n          <svg\n             xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n             xmlns:cc=\"http://creativecommons.org/ns#\"\n             xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n             xmlns:svg=\"http://www.w3.org/2000/svg\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             id=\"svg8\"\n             version=\"1.1\"\n             viewBox=\"0 0 26.458332 26.458333\"\n             height=\"24\"\n             width=\"24\">\n            <g\n               transform=\"translate(-35.347978,-45.494643)\"\n               id=\"layer1\">\n              <path\n                 id=\"microphoneIcon\"\n                 d=\"m 44.306745,71.247715 c 0.01316,-0.589519 0.04726,-0.700758 0.276324,-0.901888 0.234981,-0.206308 0.222049,-0.204799 1.752182,-0.204799 h 1.393848 v -1.864516 -1.864523 l 0.09154,0.02497 c 0.05031,0.01367 0.376105,0.0249 0.723924,0.0249 0.347812,0 0.673572,-0.01126 0.723917,-0.0249 l 0.09154,-0.02497 v 1.864523 1.864516 h 1.398277 c 1.355878,0 1.402833,0.0022 1.548601,0.07067 0.08268,0.03887 0.202668,0.131819 0.266656,0.206568 0.169312,0.197807 0.214685,0.390203 0.214685,0.910382 v 0.44329 h -4.246602 -4.246594 z m 3.555489,-5.504446 c -1.577526,-0.160357 -3.034776,-0.856472 -4.163164,-1.988688 -1.074388,-1.078029 -1.748437,-2.438455 -1.944661,-3.924868 -0.0382,-0.289523 -0.04964,-0.751444 -0.04964,-2.005706 0,-1.591632 0.0015,-1.633058 0.07067,-1.779881 0.242703,-0.516337 0.966597,-0.613553 1.337968,-0.179695 0.199345,0.232892 0.198342,0.22338 0.222577,2.111417 0.02192,1.706216 0.02341,1.735706 0.107404,2.080233 0.127568,0.523292 0.206064,0.739122 0.441854,1.214851 0.588686,1.187746 1.626815,2.116559 2.867723,2.565749 2.030922,0.735169 4.322829,0.14079 5.729177,-1.485787 0.632349,-0.731371 1.043436,-1.60084 1.205733,-2.550157 0.05872,-0.343428 0.06569,-0.546504 0.06666,-1.936368 7.43e-4,-1.418477 0.0066,-1.568006 0.06221,-1.729686 0.11772,-0.340826 0.394639,-0.536596 0.760837,-0.537882 0.352977,-0.0015 0.600406,0.160291 0.745461,0.486676 0.05678,0.127814 0.06132,0.256147 0.06132,1.748266 0,1.642743 -0.01435,1.903192 -0.138248,2.507247 -0.267049,1.30216 -1.024907,2.65372 -1.994187,3.556441 -1.486828,1.384721 -3.421233,2.047933 -5.389675,1.847838 z m -0.06235,-2.859532 c -0.808453,-0.161739 -1.459737,-0.498559 -2.036526,-1.053215 -0.621623,-0.597775 -1.005761,-1.308597 -1.186045,-2.194685 -0.05634,-0.276985 -0.06005,-0.605905 -0.06005,-5.28791 0,-5.468706 -0.01,-5.182051 0.202719,-5.834502 0.462916,-1.42012 1.66919,-2.470452 3.121325,-2.717814 2.193318,-0.373623 4.204182,1.016538 4.667775,3.226933 0.05998,0.285979 0.0628,0.527307 0.0628,5.325383 v 5.025841 l -0.0769,0.349476 c -0.365499,1.661157 -1.638586,2.890589 -3.291747,3.178879 -0.387878,0.06763 -1.014369,0.05946 -1.403346,-0.01835 z\"/>\n            </g>\n          </svg>\n        </object>\n      </span>\n    </div>\n    <datalist id=\"recommendedaddresslist\"></datalist>\n    ";

  var addressAutocomplete =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(addressAutocomplete, _HTMLElement);

    /**
     * @override
     */
    function addressAutocomplete() {
      var _this;

      _classCallCheck(this, addressAutocomplete);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(addressAutocomplete).call(this));
      console.log('inside overridden constructor');
      var templateContent = template.content.cloneNode(true);
      _this._content = templateContent.getElementById('value');

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(templateContent);
      /**
       * 
       */


      document._currentScript = document._currentScript || document.currentScript;

      var recommendedaddresslist = _this.shadowRoot.querySelector('#recommendedaddresslist');

      var searchBox = _this.shadowRoot.querySelector('#searchBox');

      var selectedAddress = {};

      var microphoneIcon = _this.shadowRoot.querySelector('#dictate');

      var processFunction = "setAddress";
      var addressList = "";

      function createAddressList(search) {
        return new Promise(function (resolve, reject) {
          fetch('https://photon.komoot.io/api/?q=' + search).then(function (response) {
            return response.json();
          }).then(function (j) {
            addressList = "";
            addressList += '';
            Object.keys(j.features).forEach(function (item) {
              addressList += '<option id="' + j.features[item].properties.osm_id + '" data-value="' + encodeURIComponent(JSON.stringify(j.features[item].properties)) + '" value="';
              addressList += j.features[item].properties.name == undefined || j.features[item].properties.name === j.features[item].properties.street || j.features[item].properties.street == undefined ? '' : '' + j.features[item].properties.name + '&nbsp; - &nbsp;';
              addressList += j.features[item].properties.name == undefined || j.features[item].properties.name === j.features[item].properties.street ? '' : '' + j.features[item].properties.name + ' ';
              addressList += j.features[item].properties.country == undefined ? '' : ' ' + j.features[item].properties.country;
              addressList += j.features[item].properties.state == undefined ? '' : ' ' + j.features[item].properties.state;
              addressList += j.features[item].properties.postcode == undefined ? '' : ' ' + j.features[item].properties.postcode;
              addressList += j.features[item].properties.city == undefined ? '' : ' ' + j.features[item].properties.city;
              addressList += j.features[item].properties.street == undefined ? '' : ' ' + j.features[item].properties.street;
              addressList += j.features[item].properties.housenumber == undefined ? ' ' : ' ' + j.features[item].properties.housenumber; //addressList += '' + j.features[item].properties.osm_value

              addressList += ' ' + j.features[item].properties.osm_id;
              addressList += '"></option>';
            });
            resolve(addressList);
          });
        });
      }

      ;

      function returnSelectedAddress(selectedAddress) {
        recommendedaddresslist.innerHTML = '';
        console.log(JSON.parse(selectedAddress));
        window[processFunction](JSON.parse(selectedAddress));
      }

      function getAddresses(searchstring) {
        return new Promise(function (resolve, reject) {
          //searchBox.classList.remove('recording');
          //microphoneIcon.classList.remove('recording');
          if (searchstring.length > 3) {
            var myaddress = createAddressList(searchstring).then(function (myaddress) {
              recommendedaddresslist.innerHTML = myaddress;
            });
          }

          ;
          var listitems = [];
          resolve(searchstring.length);
        });
      }

      function startDictation() {
        return new Promise(function (resolve, reject) {
          if (window.hasOwnProperty('webkitSpeechRecognition')) {
            searchBox.classList.add('recording');
            microphoneIcon.classList.add('recording');
            var recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = "de-DE";
            recognition.start();

            recognition.onresult = function (e) {
              searchBox.value = e.results[0][0].transcript;
              recognition.stop();
              searchBox.classList.remove('recording');
              microphoneIcon.classList.remove('recording');
            };

            recognition.onerror = function (e) {
              recognition.stop();
              searchBox.classList.remove('recording');
              microphoneIcon.classList.remove('recording');
            };
          }

          resolve(searchBox.value);
        });
      }

      function getLastElement(str) {
        if (typeof str !== 'string') {
          return "Input must be a string"; // Handle non-string input
        }

        if (str.trim() === "") {
          return ""; // Handle empty or whitespace-only strings
        }

        var parts = str.split(/\s+/); // Split by one or more whitespace characters

        return parts[parts.length - 1];
      }

      window.onload = function init() {
        searchBox.addEventListener("change", function (event) {
          getAddresses(searchBox.value).then(function () {
            var grabID = getLastElement(searchBox.value);
            console.log(grabID);
            var value2send = recommendedaddresslist.querySelector("option[id=\"".concat(grabID, "\"]")).getAttribute("data-value");
            console.log(decodeURIComponent(value2send));
            returnSelectedAddress(decodeURIComponent(value2send));
          });
        }, false);
        searchBox.addEventListener("keyup", function () {
          getAddresses(searchBox.value);
        }, false);
        searchBox.addEventListener("click", function () {
          searchBox.value = '';
          recommendedaddresslist.innerHTML = '';
        }, false);
        microphoneIcon.addEventListener("click", function () {
          startDictation().then(function () {
            console.log("------------");
          });
        }, false);
      };

      return _this;
    }
    /**
     * Fires when an instance was inserted into the document.
     * @override
     */


    _createClass(addressAutocomplete, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        console.log('inside overridden connectedCallback'); //this._upgradeProperty('value');
        //this._upgradeProperty('interval');

        this.addEventListener('click', this._onClick);
      }
    }]);

    return addressAutocomplete;
  }(_wrapNativeSuper(HTMLElement)); // Registers <vt-shadow-dom-counter> as a custom element


  window.customElements.define('address-autocomplete', addressAutocomplete);
})();