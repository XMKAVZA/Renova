sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, MessageToast, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("metu.egitim1metu.egitim1.controller.HelloPanel", {
		onInit: function() {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onPress: function() {
			if (Notification.permission !== "granted")
				Notification.requestPermission();
			else {
				var notification = new Notification('Bildiriminiz Var!', {
					icon: "sap-icon://accept",
					body: "Hey there! You've been notified!"
				});

				notification.onclick = function() {
					window.open("https://webidetesting9980004-s0015750449trial.dispatcher.hanatrial.ondemand.com/webapp/extended_runnable_file.html?hc_orionpath=%2Fs0015750449trial%24S0015750449-OrionContent%2Fmetu.egitim1&origional-url=index.html&sap-ui-appCacheBuster=..%2F&sap-ui-xx-componentPreload=off");
				};

			}

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sMsg = oBundle.getText("Hi");
			var vInput = this.getView().byId("input").getValue();
			// show message
			MessageToast.show(sMsg + " " + vInput);
			this.getView().byId("input").setValue("Bu bir denemedir");
			// MessageToast.show("Hello World", {
			// 	duration: 300
			// });
			// alert("Hello World");
		},
		onShowDialog: function() {
			this._getDialog().open();
		},
		onCloseDialog: function() {
			this._getDialog().close();
		},
		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = sap.ui.xmlfragment("metu.egitim1metu.egitim1.view.Dialog", this);
				this.getView().addDependent(this._dialog);
				jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._dialog);
			}
			return this._dialog;
		},
		onSearch: function(oEvent) {
			var vQuery = oEvent.getParameter("query");
			var aFilter = [];
			aFilter.push(new Filter("ProductName", FilterOperator.Contains, vQuery));
			var oList = this.getView().byId("list");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);

		}

	});
});