# \<address-autocomplete\>
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/joeherwig/address-autocomplete)

Webcomponent to fetch parts of an address within one single input-field that supports speech-input in webkit-browsers and offers an suggestion list based on open street map. The element object with the selected suggestion is then pushed to an external function to process these date eg. to fill in a form on the host site.

## Demo:

See the [online-Demo here](https://joeherwig.github.io/address-autocomplete/)

## Useage
```html
  <head>
    <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="address-autocomplete.html">
    ...
  </head>
  <body>
    ...
    <address-autocomplete></address-autocomplete>
    ....
```

## Customizing
If you want to process the address info you got "on click", per default the function *setAddress(addressobject)* is called and receives the address object as parameter.
If you want to use your own function name, you can set it with the optional parameter *processaddressfunction*.
The following example uses this web component to validate addresses and populate a simple form with its data. If the focus is reset into the web component the form fields are reset.

The following example is
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">
    <title>address-autocomplete demo</title>
    <script src="../bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="address-autocomplete.html">
    <script>
      function myOwnAddressProcessingFunction(address) {
        document.getElementById('name').value = address.name || '';
        document.getElementById('street').value = address.street || '';
        document.getElementById('housenumber').value = address.housenumber || '';
        document.getElementById('zipcode').value = address.postcode || '';
        document.getElementById('city').value = address.city || '';
        document.getElementById('country').value = address.country || '';
      }
    </script>
  </head>
  <body>
    <div>
      <h1>Simple address-autocomplete demo</h1>

      <address-autocomplete processaddressfunction="myOwnAddressProcessingFunction" onfocus="myOwnAddressProcessingFunction({})"/>

      <form style="margin-top: 3rem;">
        <input id="name" placeholder="Name"/>
        <input id="street" placeholder="street"/>
        <input id="housenumber" placeholder="housenumber"/>
        <input id="zipcode" placeholder="zipcode"/>
        <input id="city" placeholder="city"/>
        <input id="country" placeholder="country"/>
      </form>
    </div>
  </body>
</html>

```

## Local test
### Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

### Viewing this webcomponent locally

```
$ polymer serve
```

### Running Tests

```
$ polymer test
```

