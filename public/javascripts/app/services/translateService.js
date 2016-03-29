angular.module("appModule").service("translateService", function($cookies) {
    var _translations = {
         "en":{
             "generic.Action":"Actions",
             "generic.saved":"Record has been successfully saved!",
             "generic.deleteConfirmation":"Are you sure you want to delete %s?",
             "generic.Save":"Save",
             "generic.Edit":"Edit",
             "generic.Delete":"Delete",
             "generic.Attention":"Attention",
             "generic.Confirm":"Confirm",
             "generic.Cancel":"Cancel",
             "generic.deleted":"Record has been successfully deleted!",
             "users.name":"Name",
             "users.NewUser":"New User",
             "users.ListUser":"List User",
             "users.EditUser":"Edit User",
             "users.Name":"Name",
         },
         "pt-br":{
             "generic.Action":"Ação",
             "generic.saved":"O registro foi salvo com sucesso!",
             "generic.deleteConfirmation":"Deseja realmente excluir %s?",
             "generic.Save":"Salvar",
             "generic.Edit":"Editar",
             "generic.Delete":"Excluir",
             "generic.Attention":"Atenção",
             "generic.Confirm":"Confirmar",
             "generic.Cancel":"Cancelar",
             "generic.deleted":"O registro foi excluído com sucesso!",
             "users.name":"Nome",
             "users.NewUser":"Novo Usuário",
             "users.ListUser":"Listar Usuário",
             "users.EditUser":"Editar Usuário",
             "users.Name":"Nome",
         }
    };

    this.translate = function(input, params){
        var language = $cookies.get("myFavoriteLanguage");
        var translated = _translations[language][input];
        if(translated == undefined){
            translated = input;
        }else if(params != undefined && params.length > 0){
            while((param = params.shift()) != undefined){
                translated = translated.replace("%s", param);
            }
        }
        return translated;
    }
});