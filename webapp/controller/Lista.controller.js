sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.fiori_06.cadastro_de_alunos.controller.View1", {
		onSearch: function(oControlEvent){
			var oSearchField = oControlEvent.getSource();
			var sValue = oSearchField.getValue();
			sap.m.MessageToast.show(sValue);
			//console.log(sValue);

				
		},
		onAdd: function () {
			sap.m.MessageToast.show("Apertou");
		}, // <-Vírgula
		
		onItemPress: function(oEvent) {
			var oItem = oEvent.getParameters().listItem;
			var oContext = oItem.getBindingContext();
			var oAluno = oContext.getObject();
			var sId = oAluno.Id;
			this.getOwnerComponent().getRouter().navTo("exibir", { codigo: sId } );
			// sap.m.MessageToast.show();
			// this.getOwnerComponent().getRouter().navTo("exibir");
		}
	});
});