/**
This file is part of the Zimbra ComposeAndClose Zimlet project.
Copyright (C) 2018 BTACTIC, SCCL

Bugs and feedback: https://github.com/btactic/com-btactic-composeandcloseemail/issues

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/.

*/

//Constructor
function com_btactic_composeandcloseemail_HandlerObject() {
};


com_btactic_composeandcloseemail_HandlerObject.prototype = new ZmZimletBase();
com_btactic_composeandcloseemail_HandlerObject.prototype.constructor = com_btactic_composeandcloseemail_HandlerObject;

com_btactic_composeandcloseemail_HandlerObject.prototype.toString =
function() {
   return "com_btactic_composeandcloseemail_HandlerObject";
};

/** 
 * Creates the Zimbra OpenPGP Zimlet, extends {@link https://files.zimbra.com/docs/zimlet/zcs/8.6.0/jsapi-zimbra-doc/symbols/ZmZimletBase.html ZmZimletBase}.
 * @class
 * @extends ZmZimletBase
 *  */
var ComposeAndCloseZimlet = com_btactic_composeandcloseemail_HandlerObject;


    function cancelComposeController () {
    setTimeout(function () {
        composeController._cancelCompose()
    }, 500 );

    }

    var composeController = AjxDispatcher.run("GetComposeController");
        if(composeController) {
            var params = {action:ZmOperation.NEW_MESSAGE, inNewWindow:false, composeMode:Dwt.HTML,
            toOverride:null, subjOverride:'Loading... This email will be closed automatically', extraBodyText:'', callback:cancelComposeController}
            composeController.doAction(params); // opens asynchronously the window.
        }

/** 
 * This method gets called when Zimbra Zimlet framework initializes.
 * ComposeAndCloseZimlet uses the init function to load openpgp.js and configure the user settings and runtime variables.
 */
ComposeAndCloseZimlet.prototype.init = function() {


};
