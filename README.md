# BootstrapSwitch
BootstrapSwitch Aspectize Extension for http://www.bootstrap-switch.org

(The site web is currently off, you may access it via archive: https://web.archive.org/web/20161015011945/http://www.bootstrap-switch.org/)

## 1 - Download

Download extension package from aspectize.com:
- in the portal, goto extension section
- browse extension, and find BootstrapSwitch
- download package and unzip it into your local WebHost Applications directory; you should have a BootstrapSwitch directory next to your app directory.

## 2 - Configuration

Add BootstrapSwitch as Shared Application in your application configuration file.
In your Visual Studio Project, find the file Application.js in the Configuration folder.

Add BootstrapSwitch in the Directories list :
```javascript
app.Directories = "BootstrapSwitch";
```

## 3 - Include js and css

In your application.htm.ashx file, add the following lines:
```javascript
<!-- bootstrap switch -->
<script src='~BootstrapSwitch/bootstrap-switch/bootstrap-switch.min.js'></script>
<link rel='stylesheet' type='text/css' href='~BootstrapSwitch/bootstrap-switch/bootstrap-switch.min.css' />
```

## 4 - Usage

a/ Html

Insert the following html into your control:
```html
<div aas-name='BootstrapSwitchSample' aas-type='BootstrapSwitch.BootstrapSwitch'></div>
```
    
b/ Binding

The following properties are bindable (reference of properties are here: http://www.bootstrap-switch.org/options.html):
- State: the checkbox state.
- Size: the checkbox size (null, 'mini', 'small', 'normal', 'large'), default is null.
- Disabled: the disabled state, default is false.
- Readonly: the readonly state, default is false.
- Indeterminate: indeterminate state, default is false. Indeterminate may be bound to true if state value is null.
- Inverse: Inverse switch direction, default is false.
- OnColor: color of the left side of the switch ('primary', 'info', 'success', 'warning', 'danger', 'default'), default is 'primary'.
- OffColor: color of the right side of the switch ('primary', 'info', 'success', 'warning', 'danger', 'default'), default is 'default'.
- OnText: text of the left side of the switch, default is 'ON'.
- OffText: text of the right side of the switch, default is 'OFF'.
- LabelText: text of the center handle of the switch, default is '&nbsp;'.

The control has the following event:
- OnStateChanged: Fired when the state is changed.


