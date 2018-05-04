sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("metu.egitim1metu.egitim1.controller.View1", {
		onInit: function() {
			var oData = {
				recipient: {
					name: "Muhammed"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		onPress: function() {
		 var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sMsg = oBundle.getText("Hi1");
         var vInput = this.getView().byId("input").getValue();
         // show message
         MessageToast.show(sMsg + " " + vInput);
			// MessageToast.show("Hello World", {
			// 	duration: 300
			// });
			// alert("Hello World");
		}
	});
});