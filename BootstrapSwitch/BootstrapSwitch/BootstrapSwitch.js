/* Aspectize BootstrapSwitch extension */


Aspectize.Extend("BootstrapSwitch", {

    Properties: { State: true, Size: null, Disabled: false, Readonly: false, Indeterminate: false, Inverse: false, RadioAllOff: false, OnColor: 'primary', OffColor: 'default', OnText: 'ON', OffText: 'OFF', LabelText: '&nbsp;' },
    Events: ['OnStateChanged'],
    Init: function (elem) {

        var options = {
            state: Aspectize.UiExtensions.GetProperty(elem, 'State'),
            size: Aspectize.UiExtensions.GetProperty(elem, 'Size'),
            disabled: Aspectize.UiExtensions.GetProperty(elem, 'Disabled'),
            readonly: Aspectize.UiExtensions.GetProperty(elem, 'Readonly'),
            indeterminate: Aspectize.UiExtensions.GetProperty(elem, 'Indeterminate'),
            inverse: Aspectize.UiExtensions.GetProperty(elem, 'Inverse'),
            radioAllOff: Aspectize.UiExtensions.GetProperty(elem, 'RadioAllOff'),
            onColor: Aspectize.UiExtensions.GetProperty(elem, 'OnColor'),
            offColor: Aspectize.UiExtensions.GetProperty(elem, 'OffColor'),
            onText: Aspectize.UiExtensions.GetProperty(elem, 'OnText'),
            offText: Aspectize.UiExtensions.GetProperty(elem, 'OffText'),
            labelText: Aspectize.UiExtensions.GetProperty(elem, 'LabelText')
        }

        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        elem.appendChild(checkbox);

        var theSwitch = $(checkbox);

        $(checkbox).bootstrapSwitch(options);

        $(checkbox).on('switchChange.bootstrapSwitch', function (event, state) {
            //console.log(this); // DOM element
            //console.log(event); // jQuery event
            //console.log(state); // true | false

            Aspectize.UiExtensions.ChangeProperty(elem, 'State', state);
            Aspectize.UiExtensions.ChangeProperty(elem, 'Indeterminate', false);
        });

        Aspectize.UiExtensions.AddMergedPropertyChangeObserver(elem, function (sender, arg) {

            for (var p in arg) {
                var optionName = p.charAt(0).toLowerCase() + p.slice(1);

                if (optionName == 'indeterminate') {
                    theSwitch.bootstrapSwitch(optionName, arg[p]);
                }
            }

            for (var p in arg) {
                var optionName = p.charAt(0).toLowerCase() + p.slice(1);
                if (optionName !== 'indeterminate') {
                    if (optionName == 'state') {
                        var state = arg[p];
                        if (state !== null) {
                            theSwitch.bootstrapSwitch(optionName, arg[p], true);
                            theSwitch.bootstrapSwitch('indeterminate', false);
                        }
                    } else {
                        theSwitch.bootstrapSwitch(optionName, arg[p]);
                    }
                }
            }
        });

    }
});
