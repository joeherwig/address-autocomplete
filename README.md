# \<address-autocomplete\>

Webcomponent to fetch parts of an address within one single input-field that supports speech-input in webkit-browsers and offers an suggestion list based on open street map. The element object with the selected suggestion is then pushed to an external function to process these date eg. to fill in a form on the host site.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing this webcomponent locally

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## demo:
<!---
```
<script>
  function setAddress(address) {
    document.getElementById('name').value = address.name || '';
    document.getElementById('street').value = address.street || '';
    document.getElementById('housenumber').value = address.housenumber || '';
    document.getElementById('zipcode').value = address.postcode || '';
    document.getElementById('city').value = address.city || '';
    document.getElementById('country').value = address.country || '';
  }
</script>
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="address-autocomplete.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<address-autocomplete processaddressfunction="setAddress" onfocus="setAddress({})"/>

```
<address-autocomplete processaddressfunction="setAddress" onfocus="setAddress({})"/>
<form style="margin-top: 3rem;">
  <input id="name" placeholder="Name"/>
  <input id="street" placeholder="street"/>
  <input id="housenumber" placeholder="housenumber"/>
  <input id="zipcode" placeholder="zipcode"/>
  <input id="city" placeholder="city"/>
  <input id="country" placeholder="country"/>
</form>

