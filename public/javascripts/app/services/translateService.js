angular.module("appModule").service("translateService", function($cookies) {
    var _translations = {
         "en":{
             "generic.Action":"Actions",
             "generic.saved":"The data has been saved.",
             "generic.deleteConfirmation":"Are you sure you want to delete %s?",
             "generic.Save":"Save",
             "users.name":"Name",
             "users.NewUser":"New User",
             "users.ListUser":"List User",
             "users.EditUser":"Edit User",
             "users.Name":"Name",
         },
         "pt-br":{
             "generic.Action":"Ação",
             "generic.saved":"Os dados foram salvos.",
             "generic.deleteConfirmation":"Deseja realmente excluir %s?",
             "generic.Save":"Salvar",
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