angular.module("appModule").service("translateService", function($cookies) {
    var _translations = {
         "en":{
             "generic.Action":"Actions",
             "generic.saved":"Record has been successfully saved!",
             "generic.deleteConfirmation":"Are you sure you want to delete %s?",
             "generic.Save":"Save",
             "generic.Edit":"Edit",
             "generic.Attention":"Attention",
             "generic.Confirm":"Confirm",
             "generic.Cancel":"Cancel",
             "generic.deleted":"Record has been successfully deleted!",
             "generic.Detail":"Detail %s",
             "generic.New":"New %s",
             "generic.Back":"Back",
             "generic.Delete":"Delete",
             "generic.First":"First",
             "generic.Previous":"Previous",
             "generic.Next":"Next",
             "generic.Last":"Last",
             "generic.date.format":"yyyy-MM-dd",
             "generic.Register":"Register",
             "generic.Users":"Users",
             "users.User":"User",
             "users.Name":"Name",
             "users.Created":"Registration Date",
             "users.Modified":"Modification Date",
         },
         "pt-br":{
             "generic.Action":"Ação",
             "generic.saved":"O registro foi salvo com sucesso!",
             "generic.deleteConfirmation":"Deseja realmente excluir %s?",
             "generic.Save":"Salvar",
             "generic.Edit":"Editar",
             "generic.Attention":"Atenção",
             "generic.Confirm":"Confirmar",
             "generic.Cancel":"Cancelar",
             "generic.deleted":"O registro foi excluído com sucesso!",
             "generic.Detail":"Detalhe %s",
             "generic.New":"Novo %s",
             "generic.Back":"Voltar",
             "generic.Delete":"Excluir",
             "generic.First":"Primeiro",
             "generic.Previous":"Anterior",
             "generic.Next":"Próximo",
             "generic.Last":"Último",
             "generic.date.format":"dd/MM/yyyy",
             "generic.Register":"Cadastro",
             "generic.Users":"Usuários",
             "users.User":"Usuário",
             "users.Name":"Nome",
             "users.Created":"Data de Cadastro",
             "users.Modified":"Data de Modificação",
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