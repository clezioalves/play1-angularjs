angular.module("appModule").service("translateService",
    ['$cookies', function($cookies) {
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
             "generic.Projects":"Projects",
             "generic.Occupations":"Occupations",
             "generic.Created":"Registration Date",
             "generic.Modified":"Modification Date",
             "generic.select":"Select",
             "generic.Done":"Done",
             "generic.Oops":"Oops",
             "users.User":"User",
             "users.Name":"Name",
             "occupations.Occupation":"Occupation",
             "occupations.Name":"Name",
             "projects.Project":"Project",
             "projects.Name":"Name",
             "projects.Description":"Description",
             "projects.Users":"Users",
             "projects.Participants":"Participants",
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
             "generic.First":"Primeira",
             "generic.Previous":"Anterior",
             "generic.Next":"Próxima",
             "generic.Last":"Última",
             "generic.date.format":"dd/MM/yyyy",
             "generic.Register":"Cadastro",
             "generic.Users":"Usuários",
             "generic.Projects":"Projetos",
             "generic.Occupations":"Cargos",
             "generic.Created":"Data de Cadastro",
             "generic.Modified":"Data de Modificação",
             "generic.select":"Selecione",
             "generic.Done":"Feito",
             "generic.Oops":"Falhou",
             "users.User":"Usuário",
             "users.Name":"Nome",
             "occupations.Occupation":"Cargo",
             "occupations.Name":"Nome",
             "projects.Project":"Projeto",
             "projects.Name":"Nome",
             "projects.Description":"Descrição",
             "projects.Participants":"Participantes",
         }
    };

    this.translate = function(input, params){
        var language = $cookies.get("myFavoriteLanguage");
        var translated = _translations[language][input];
        if(translated == undefined){
            translated = input;
        }else if(params != undefined && params.length > 0){
            var param = undefined;
            while((param = params.shift()) != undefined){
                translated = translated.replace("%s", param);
            }
        }
        return translated;
    }
}]);